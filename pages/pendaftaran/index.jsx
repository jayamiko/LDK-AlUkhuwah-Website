import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
// import { UKM, kampus } from "../_app";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
// import styles from "./pendaftaran.module.css";
import Papa from "papaparse";
// import { DataGrid } from "@mui/x-data-grid";
import FormRegistration from "../../components/Form/FormRegistration";
import Header from "../../components/layout/Header/Header";
// import { menu } from "../../data/data";
import Head from "next/head";
import swal from "sweetalert2";

// For Spread Sheet data
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxBND5Bi5PYyIYkqwU-bnjaOhIe2EfG79qs1aVsryR8_MGOy-8h1_IyFYyJ1spb0EXD/exec";
const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vT2Kdpc-_D5FgG8qPrPGj1SZaMdxfJTkcVGiQp5VQmz1FTcSAeTtb_Lq6Ubi4V2HrBtZVGFCIqhLdgf/pub?gid=0&single=true&output=csv`;

const ikhwanGroupWA = "https://chat.whatsapp.com/Es7eN3cRVNCL9h1FbYRsfX";
const akhwatGroupWA = "https://chat.whatsapp.com/H9Zo4dYnBtT7UpEhaYLBU5";

const RegistrationPage = () => {
  const formRef = useRef(null);
  const [dataCSV, setDataCSV] = useState([]);
  const [personalMember, setPersonalMember] = useState([
    {
      fullName: "",
      email: "",
      tanggalLahir: "",
      jenisKelamin: "Laki-laki",
      whatsapp: "",
      fakultas: "FAI",
      jurusan: "",
      pengalamanOrganisasi: "",
      alasan: "",
    },
  ]);

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [existEmail, setExistEmail] = useState(false);
  const [existWhatsapp, setExistWhatsapp] = useState(false);
  const [warning, setWarning] = useState(false);
  const [title, setTitle] = useState("Bergabung Bersama Kami!");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalMember({
      ...personalMember,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      fullName,
      email,
      tanggalLahir,
      whatsapp,
      pengalamanOrganisasi,
      alasan,
    } = personalMember;

    const existEmailData = dataCSV.find((data) => data.email === email);
    const existWhatsappData = dataCSV.find(
      (data) => `0${data.whatsapp}` === whatsapp
    );

    setLoading(true);
    if (
      (!fullName ||
        !email ||
        !tanggalLahir ||
        !whatsapp ||
        !pengalamanOrganisasi,
      !alasan)
    ) {
      setWarning(true);
    } else {
      if (!existEmailData && !existWhatsappData) {
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE,
            process.env.NEXT_PUBLIC_TEMPLATEID,
            e.target,
            process.env.NEXT_PUBLIC_KEY
          )
          .then((res) => {
            if (res.status === 200) {
              setSuccess(true);
            }
          });
        fetch(scriptURL, {
          method: "POST",
          body: new FormData(formRef.current),
        })
          .then((response) => {
            console.log("Successfully", response);

            setLoading(false);
            setExistEmail(false);
            setExistWhatsapp(false);
            setTitle("Selamat Datang di LDK Al-Ukhuwah");
            setName(personalMember.fullName);
            setGender(personalMember.jenisKelamin);
            swal.fire(
              `Selamat Bergabung!`,
              `${
                personalMember.jenisKelamin === "Perempuan"
                  ? `Ukh, ${personalMember.fullName} &#128519; <br /> 
                  <a href="${akhwatGroupWA}" target="_blank">
                    <button className="w-full h-10 rounded-md bg-cyan-500 shadow-md text-emerald-500 font-semibold text-xs sm:text-sm xl:text-base">
                      Masuk Grup WhatsApp
                    </button>
                  </a>`
                  : `Akh, ${personalMember.fullName} &#128519; <br /> 
                  <a href="${ikhwanGroupWA}" target="_blank">
                    <button className="w-full h-10 rounded-md bg-cyan-500 shadow-md text-emerald-500 font-semibold text-xs sm:text-sm xl:text-base">
                      Masuk Grup WhatsApp
                    </button>
                  </a>`
              }`,
              "success"
            );
            setInterval(() => {
              setTitle("Bergabung Bersama Kami!");
              setName("");
              setGender("");
            }, 3000);
            setPersonalMember({
              fullName: "",
              email: "",
              tanggalLahir: "",
              jenisKelamin: "Laki-laki",
              whatsapp: "",
              fakultas: "FAI",
              jurusan: "",
              pengalamanOrganisasi: "",
              alasan: "",
            });
          })
          .catch((error) => {
            console.error("Error!", error.message);
          });
      } else {
        setLoading(false);
        existEmailData ? setExistEmail(true) : setExistEmail(false);
        existWhatsappData ? setExistWhatsapp(true) : setExistWhatsapp(false);
      }
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

  // const columns = [
  //   { field: "id", headerName: "No", width: 60 },
  //   { field: "fullName", headerName: "Full Name", width: 350 },
  //   { field: "usia", headerName: "Usia", width: 80 },
  //   { field: "jenisKelamin", headerName: "Jenis Kelamin", width: 120 },
  //   {
  //     field: "fakultas",
  //     headerName: "Fakultas/Jurusan",
  //     width: 320,
  //   },
  //   {
  //     field: "timestamp",
  //     headerName: "Tanggal Masuk",
  //     width: 150,
  //     // valueGetter: (params) =>
  //     //   `${params.row.fullName || ''} ${params.row.fakultas || ''}`,
  //   },
  // ];

  // const dataRow = dataCSV.map((item, index) => ({
  //   ...item,
  //   id: index + 1,
  //   age: item.usia,
  //   jenisKelamin: item.jenisKelamin,
  //   fakultas: `${item.fakultas} / ${item.jurusan}`,
  // }));

  return (
    <>
      <Head>
        <title>LDK UNISMA - Pendaftaran</title>
        <meta
          name="description"
          content="Pendaftaran LDK Al-Ukhuwah UNISMA BEKASI"
        />
      </Head>
      <section className="coverPendaftaran">
        <Header />
        <div>
          <div className="container mx-auto py-0 xl:py-4">
            <FormRegistration
              formRef={formRef}
              success={success}
              personalMember={personalMember}
              warning={warning}
              title={title}
              name={name}
              gender={gender}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
              existEmail={existEmail}
              existWhatsapp={existWhatsapp}
            />
          </div>
        </div>
      </section>
      {/* <div
        className="container mx-auto my-16"
        style={{ height: 630, width: "100%" }}
      >
        <DataGrid
          rows={dataRow}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </div> */}
    </>
  );
};

export default RegistrationPage;
