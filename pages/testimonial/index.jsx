import React, { useState, useRef, useEffect } from "react";
// import emailjs from "emailjs-com";
import { UKM, kampus } from "../_app";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Papa from "papaparse";
// import { DataGrid } from "@mui/x-data-grid";
import FormTestimonial from "../../components/Form/FormTestimonial";
import Header from "../../components/layout/Header/Header";
// import { menu } from "../../data/data";
import Head from "next/head";
import swal from "sweetalert2";

// For Spread Sheet data
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz1UBvIIV0AQvu4bnG1UG7D7yw65GjcVDqoJb37D-JrHxCoezBT1GabZ8cAczECQmWg/exec";
const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vT2Kdpc-_D5FgG8qPrPGj1SZaMdxfJTkcVGiQp5VQmz1FTcSAeTtb_Lq6Ubi4V2HrBtZVGFCIqhLdgf/pub?gid=0&single=true&output=csv`;
// For Email Js

const TestimonialPage = () => {
  const formRef = useRef(null);
  const [dataCSV, setDataCSV] = useState([]);
  const [personalMember, setPersonalMember] = useState([
    {
      fullName: "",
      instagram: "",
      jenisKelamin: "Laki-laki",
      posisi: "",
      // angkatan: "",
      fakultas: "FAI",
      jurusan: "",
      ulasan: "",
    },
  ]);

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [existInstagram, setExistInstagram] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalMember({
      ...personalMember,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, posisi, jurusan, ulasan } = personalMember;

    const existUsernameInstagram = dataCSV.find(
      (data) => data.instagram === instagram
    );

    setLoading(true);
    if (!fullName || !posisi || !jurusan || !ulasan) {
      console.log("1");
      setLoading(false);
      setWarning(true);
    } else {
      console.log("2");
      if (!existUsernameInstagram) {
        console.log("3");
        // emailjs
        //   .sendForm(
        //     process.env.NEXT_PUBLIC_SERVICE,
        //     process.env.NEXT_PUBLIC_TEMPLATEID,
        //     e.target,
        //     process.env.NEXT_PUBLIC_KEY
        //   )
        //   .then((res) => {
        //     if (res.status === 200) {
        //       setSuccess(true);
        //     }
        //   });
        fetch(scriptURL, {
          method: "POST",
          body: new FormData(formRef.current),
        })
          .then((response) => {
            console.log("Success");
            console.log("Successfully", response);
            setSuccess(true);
            setLoading(false);
            setExistInstagram(false);
            swal.fire(`Terima Kasih Atas Testimoni Kamu`, ``, "success");
            setPersonalMember({
              fullName: "",
              instagram: "",
              posisi: "",
              // angkatan: "",
              jenisKelamin: "Laki-laki",
              fakultas: "FAI",
              jurusan: "",
              ulasan: "",
            });
          })
          .catch((error) => {
            console.error("Error!", error.message);
          });
      } else {
        console.log("4");
        setLoading(false);
        existUsernameInstagram
          ? setExistInstagram(true)
          : setExistInstagram(false);
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
        <title>LDK UNISMA - Testimonial</title>
        <meta
          name="description"
          content="Testimonial LDK Al-Ukhuwah UNISMA BEKASI"
        />
      </Head>
      <section className="coverTestimonial">
        <Header />
        <div>
          <div className="container mx-auto py-0 xl:py-4">
            <FormTestimonial
              formRef={formRef}
              success={success}
              personalMember={personalMember}
              warning={warning}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
              existInstagram={existInstagram}
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

export default TestimonialPage;
