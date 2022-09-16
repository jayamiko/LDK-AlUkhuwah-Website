import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { UKM, kampus } from "../_app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import styles from "./pendaftaran.module.css";
import Papa from "papaparse";
import { DataGrid } from "@mui/x-data-grid";
import FormRegistration from "../../components/Form/FormRegistration";
import Head from '../../components/layout/Header/Head.jsx'
import {menu} from '../../data/data'

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxBND5Bi5PYyIYkqwU-bnjaOhIe2EfG79qs1aVsryR8_MGOy-8h1_IyFYyJ1spb0EXD/exec";
const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQak6neQTX9aNzNmi7hBJnzSRkKsFlvOQeg2TISgnZiW3n5C4LvMjZjj9WSYVFI7HIsSPMY3Ej1JkeW/pub?gid=0&single=true&output=csv`;

const RegistrationPage = () => {
  const formRef = useRef(null);
  const [dataCSV, setDataCSV] = useState([]);
  const [personalMember, setPersonalMember] = useState([
    {
      fullName: "",
      email: "",
      age: "",
      gender: "",
      whatsapp: "",
      fakultas: "FAI",
      study: "",
      reason: "",
    },
  ]);
  
  const [click, setClick] = useState(false);
  const [warning, setWarning] = useState(false);
  const [title, setTitle] = useState("Bergabung Bersama Kami!");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Laki-laki");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalMember({
      ...personalMember,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {fullName, email, age, whatsapp, study, reason} = personalMember;
    if(!fullName || !email || !age || !whatsapp || !study || !reason) {
      setWarning(true)
    } else {
      fetch(scriptURL, { method: "POST", body: new FormData(formRef.current) })
        .then((response) => {
          console.log("Successfully", response);
          setTitle("Selamat Datang di LDK Al-Ukhuwah")
          setName(personalMember.fullName)
          setGender(personalMember.gender)
          setPersonalMember({
            fullName: "",
            email: "",
            age: "",
            gender: "Laki-laki",
            whatsapp: "",
            fakultas: "FAI",
            study: "",
            reason: "",
          });
        })
        .catch((error) => {
          console.error("Error!", error.message);
        });
    }
  };

  useEffect(() => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (result) => {
        setDataCSV(result.data);
        return 0;
      },
      error: (err) => {
        console.log(err);
        return err;
      },
    });
  }, [personalMember, url, formRef]);

  const columns = [
    { field: "id", headerName: "No", width: 60 },
    { field: "fullName", headerName: "Full Name", width: 350 },
    { field: "usia", headerName: "Usia", width: 80 },
    {
      field: "fakultas",
      headerName: "Fakultas/Jurusan",
      width: 320,
    },
    {
      field: "angkatan",
      headerName: "Angkatan",
      width: 120,
    },
    {
      field: "timestamp",
      headerName: "Tanggal Masuk",
      width: 150,
      // valueGetter: (params) =>
      //   `${params.row.fullName || ''} ${params.row.fakultas || ''}`,
    },
  ];

  const dataRow = dataCSV.map((item, index) => ({
    ...item,
    id: index + 1,
    age: item.usia,
    fakultas: `${item.fakultas} / ${item.jurusan}`,
  }));

  return (
    <>
      <section className={`${styles.coverRegistration}`}>
        <div className="h-1/4 flex flex-col-reverse md:flex-col md:px-5 lg:m-0 w-full z-50">
          <Head />
          <header className={`${styles.bgHeader} w-full md:container mx-auto md:inline items-center m-0 overflow-hidden md:rounded-3xl`}>
            <nav className={click ? "flex" : "flex justify-between items-center"}>
              <div
                className={
                  click
                    ? "hidden"
                    : `${styles.start} md:p-0 w-full float-right max-h-32 h-full lg:hidden`
                }
              >
                <div className={click ? "hidden" : "md:hidden flex items-center"}>
                  <Link href={`/`}>
                    <a>
                      <Image
                        src="/images/ldk-icon.png"
                        width={150}
                        height={150}
                        className="w-20 sm:w-28 md:w-40"
                        alt="logo-ldk"
                      />
                    </a>
                  </Link>
                  <div className="w-full justify-between">
                    <div className="flex flex-col my-auto uppercase">
                      <h4 className="font-roboto text-base sm:text-xl md:text-2xl 2xl:text-3xl w-full font-bold">
                        {UKM}
                      </h4>
                      <span className="text-xs sm:text-sm md:text-base font-edu font-bold tracking-wide">
                        {kampus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={click ? "w-full font-roboto md:hidden" : "hidden"}>
                <div className={click ? "flex md:hidden text-white items-center" : "hidden"}>
                  <Link href={`/`}>
                    <a>
                      <Image
                        src="/images/ldk-icon.png"
                        width={150}
                        height={150}
                        className="w-20 sm:w-28 md:w-40"
                        alt="logo-ldk"
                      />
                    </a>
                  </Link>
                  <div className="w-full flex justify-between">
                    <div className="flex flex-col my-auto uppercase">
                      <h4 className="text-xl w-full sm:text-3xl sm:w-full md:text-4xl lg:text-5xl font-bold">
                        {UKM}
                      </h4>
                      <span className="text-xs sm:text-sm font-edu font-bold tracking-wide md:text-base">
                        {kampus}
                      </span>
                    </div>
                  </div>
                </div>
                <ul
                  className={click ? `${styles.mobileNav} space-y-2` : "flex md:hidden"}
                  onClick={() => setClick(false)}
                >
                  {menu.map((menus, index) => {
                    return (
                      <li key={index}>
                        <Link href={menus.path}>
                          <a className={styles.linkMenu}>{menus.name}</a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <button
                className={`mr-3 p-2 h-fit md:hidden`}
                onClick={() => setClick(!click)}
              >
                {click ? (
                  <FontAwesomeIcon 
                      icon={faTimes}
                      className="text-white text-2xl mt-10"
                  ></FontAwesomeIcon>
                  ) : (
                  <FontAwesomeIcon 
                      icon={faBars}
                      className="text-white text-2xl"
                  ></FontAwesomeIcon>
                )}
              </button>
            </nav>
          </header>
        </div>

        <div className={`${styles.form} container mx-auto xl:h-3/4`}>
          <FormRegistration
            formRef={formRef}
            personalMember={personalMember}
            warning={warning}
            title={title}
            name={name}
            gender={gender}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
      <div
        className="container mx-auto my-16"
        style={{ height: 630, width: "100%" }}
      >
        <DataGrid
          rows={dataRow}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  );
};

export default RegistrationPage;
