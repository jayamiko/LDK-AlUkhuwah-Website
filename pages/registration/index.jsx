import React, { useState, useRef, useEffect } from "react";
import styles from "./Registration.module.css";
import Papa from "papaparse";
import { DataGrid } from "@mui/x-data-grid";
// import Hero from "../home/hero/Hero";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxBND5Bi5PYyIYkqwU-bnjaOhIe2EfG79qs1aVsryR8_MGOy-8h1_IyFYyJ1spb0EXD/exec";
const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQak6neQTX9aNzNmi7hBJnzSRkKsFlvOQeg2TISgnZiW3n5C4LvMjZjj9WSYVFI7HIsSPMY3Ej1JkeW/pub?gid=0&single=true&output=csv`;

function RegistrationPage() {
  const formRef = useRef(null);
  const [dataCSV, setDataCSV] = useState([]);
  const [personalMember, setPersonalMember] = useState([
    {
      fullName: "",
      email: "",
      age: "",
      whatsapp: "",
      fakultas: "FAI",
      study: "",
      reason: "",
    },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalMember({
      ...personalMember,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(formRef.current) })
      .then((response) => {
        console.log("Successfully");
        setPersonalMember({
          fullName: "",
          email: "",
          age: "",
          whatsapp: "",
          fakultas: "FAI",
          study: "",
          reason: "",
        });
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
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
    { field: "id", headerName: "No", width: 80 },
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
      width: 200,
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
    <div className="bg-white">
      <section className={`${styles.coverRegistration} z-10`}>
        <div className="container mx-auto flex flex-col md:justify-center h-full mt-32 md:mt-0 text-white px-6 py-8 md:p-0">
          <form
            name="submit-to-google-sheet"
            className="border-2 sm:w-2/3 md:w-3/6 lg:w-2/5 xl:w-2/6 space-y-1"
            method="post"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <h2 className="font-titan text-2xl mb-1 tracking-wide">
              Bergabung Bersama Kami!
            </h2>
            <div>
              <label htmlFor="fullName">Nama Lengkap</label>
              <input
                type="text"
                className="form-control"
                value={personalMember.fullName}
                id="fullName"
                name="fullName"
                placeholder="Nama Lengkap"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Alamat Email</label>
              <input
                type="email"
                className="form-control"
                value={personalMember.email}
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between">
              <div className="w-2/5">
                <label htmlFor="usia">Usia</label>
                <input
                  type="text"
                  className="form-control"
                  value={personalMember.age}
                  id="usia"
                  name="usia"
                  placeholder="cth : 19"
                  onChange={handleChange}
                />
              </div>
              <div className="w-3/6">
                <label htmlFor="whatsapp">Whatsapp</label>
                <input
                  type="text"
                  className="form-control"
                  value={personalMember.whatsapp}
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="08xxxxxxxx"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="fakultas">Fakultas</label>
              <div className="flex flex-wrap w-full md:w-5/6">
                <div className="mr-5">
                  <input
                    type="radio"
                    id="fakultas"
                    name="fakultas"
                    value="FAI"
                    onChange={handleChange}
                    checked
                  />
                  <label className="ml-1" htmlFor="FAI">
                    FAI
                  </label>
                </div>
                <div className="mr-5">
                  <input
                    type="radio"
                    id="fakultas"
                    name="fakultas"
                    value="FISIP"
                    onChange={handleChange}
                  />
                  <label className="ml-1" htmlFor="FISIP">
                    FISIP
                  </label>
                </div>
                <div className="mr-5">
                  <input
                    type="radio"
                    id="fakultas"
                    name="fakultas"
                    value="FAPERTA"
                    onChange={handleChange}
                  />
                  <label className="ml-1" htmlFor="FAPERTA">
                    FAPERTA
                  </label>
                </div>
                <div className="mr-5">
                  <input
                    type="radio"
                    id="fakultas"
                    name="fakultas"
                    value="FKIP"
                    onChange={handleChange}
                  />
                  <label className="ml-1" htmlFor="FKIP">
                    FKIP
                  </label>
                </div>
                <div className="mr-5">
                  <input
                    type="radio"
                    id="fakultas"
                    name="fakultas"
                    value="FATEK"
                    onChange={handleChange}
                  />
                  <label className="ml-1" htmlFor="FATEK">
                    FATEK
                  </label>
                </div>
                <div className="mr-5">
                  <input
                    type="radio"
                    id="fakultas"
                    name="fakultas"
                    value="FE"
                    onChange={handleChange}
                  />
                  <label className="ml-1" htmlFor="FE">
                    FE
                  </label>
                </div>
                <div className="mr-5">
                  <input
                    type="radio"
                    id="fakultas"
                    name="fakultas"
                    value="FKSB"
                    onChange={handleChange}
                  />
                  <label className="ml-1" htmlFor="FKSB">
                    FKSB
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="angkatan">Angkatan</label>
              <input
                type="text"
                className="form-control"
                value={personalMember.study}
                id="angkatan"
                name="angkatan"
                placeholder="cth: 2019"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="jurusan">Jurusan</label>
              <input
                type="text"
                className="form-control"
                value={personalMember.study}
                id="jurusan"
                name="jurusan"
                placeholder="Jurusan"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn bg-[#1eb2a6] my-4 text-white px-5 uppercase hover:font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <div className="h-screen border-2 border-black"></div>
      <div
        className="container mx-auto mt-32 md:mt-0"
        style={{ height: 630, width: "100%" }}
      >
        <DataGrid
          rows={dataRow}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}

export default RegistrationPage;
