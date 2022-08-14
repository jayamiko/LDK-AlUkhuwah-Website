import React, { useState, useRef, useEffect } from "react";
import styles from "./pendaftaran.module.css";
import Papa from "papaparse";
import { DataGrid } from "@mui/x-data-grid";
import FormRegistration from "../../components/Form/FormRegistration";

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
        console.log("Successfully", response);
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
        <div className="container mx-auto flex flex-col items-end justify-end h-full text-white pt-8">
          <FormRegistration
            formRef={formRef}
            personalMember={personalMember}
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
