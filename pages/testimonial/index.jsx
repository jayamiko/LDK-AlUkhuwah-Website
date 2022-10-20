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
  "https://script.google.com/macros/s/AKfycbz1qPdqBnGXTINhtm5p1tZfdgkO7DVrLfb1moP3SJxNeqBFxN-MQrVrs4iVhQK29QDR/exec";
const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQak6neQTX9aNzNmi7hBJnzSRkKsFlvOQeg2TISgnZiW3n5C4LvMjZjj9WSYVFI7HIsSPMY3Ej1JkeW/pub?gid=1200427091&single=true&output=csv`;
// For Email Js

const TestimonialPage = () => {
  const formRef = useRef(null);
  const [dataCSV, setDataCSV] = useState([]);
  const [personalMember, setPersonalMember] = useState([
    {
      name: "",
      instagram: "",
      gender: "Laki-laki",
      posisi: "",
      angkatan: "",
      asalFakultas: "FAI",
      prodi: "Pendidikan Agama Islam",
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

  console.log(personalMember);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = personalMember;

    const existUsernameInstagram = dataCSV.find(
      (data) => data.instagram === instagram
    );

    setLoading(true);
    if (!name) {
      setLoading(false);
      setWarning(true);
    } else {
      if (!existUsernameInstagram) {
        fetch(scriptURL, {
          method: "POST",
          body: new FormData(formRef.current),
        })
          .then((response) => {
            console.log("Successfully", response);
            setSuccess(true);
            setLoading(false);
            setExistInstagram(false);
            swal.fire(`Terima Kasih Atas Testimoni Kamu`, ``, "success");
            setPersonalMember({
              fullName: "",
              instagram: "",
              posisi: "",
              angkatan: "",
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
