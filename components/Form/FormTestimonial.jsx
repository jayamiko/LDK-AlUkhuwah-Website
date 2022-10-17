import { fakultas } from "../../data/data";
import InvalidField from "../utils/InvalidField";
import {
  FAI,
  FAPERTA,
  FE,
  FISIP,
  FKIP,
  FKSB,
  FT,
} from "../../data/fakultas/fakultas";

export const FormTestimonial = ({
  formRef,
  personalMember,
  warning,
  handleChange,
  handleSubmit,
  loading,
  existInstagram,
}) => {
  function selectArray() {
    if (personalMember.fakultas === "FT") {
      return FT;
    } else if (personalMember.fakultas === "FAPERTA") {
      return FAPERTA;
    } else if (personalMember.fakultas === "FE") {
      return FE;
    } else if (personalMember.fakultas === "FISIP") {
      return FISIP;
    } else if (personalMember.fakultas === "FKIP") {
      return FKIP;
    } else if (personalMember.fakultas === "FKSB") {
      return FKSB;
    } else {
      return FAI;
    }
  }

  function ButtonSubmit() {
    return (
      <>
        {loading ? (
          <button
            type="submit"
            className="mx-auto w-40 h-10 my-3 2xl:w-48 2xl:h-12 cursor-no-drop bg-cyan-500 opacity-70 font-semibold rounded-md text-white uppercase hover:font-bold"
            disabled
          >
            Submit..
          </button>
        ) : (
          <button
            type="submit"
            className="mx-auto w-40 h-10 my-3 2xl:w-48 2xl:h-12 bg-cyan-500 font-semibold rounded-md text-white uppercase hover:font-bold"
          >
            Submit
          </button>
        )}
      </>
    );
  }

  return (
    <form
      name="submit-to-google-sheet"
      className="flex items-center mt-10 md:mt-0 2xl:mt-10 w-full space-y-1"
      method="post"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className="w-full text-white">
        <div className="flex flex-col items-center py-1 my-1">
          <h2 className="uppercase font-extrabold text-cyan-500 font-edu md:text-center text-lg sm:text-xl lg:text-2xl 2xl:text-3xl tracking-wide">
            Berikan Testimoni Kamu!
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row md:space-x-2 lg:space-x-10">
          <div className="md:w-1/2 lg:w-full">
            <div id="fullName">
              <label
                htmlFor="fullName"
                className="font-semibold text-sm lg:text-base 2xl:text-lg"
              >
                Nama Lengkap
              </label>
              {warning && (
                <InvalidField
                  text="Wajib Diisi"
                  state={personalMember.fullName}
                />
              )}
              <input
                type="text"
                className="form-control customPlaceholder"
                value={personalMember.fullName}
                id="fullName"
                name="fullName"
                placeholder="Nama Lengkap"
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between flex-wrap">
              <div id="instagram" className="w-3/5 md:w-2/5">
                <label
                  htmlFor="instagram"
                  className="font-semibold text-sm lg:text-base 2xl:text-lg"
                >
                  Username Instagram
                </label>
                {warning && (
                  <InvalidField
                    text="Wajib Diisi"
                    state={personalMember.instagram}
                  />
                )}
                {existInstagram && (
                  <div className="inline-block text-orange-500 text-xs lg:text-sm font-bold italic lg:px-1">
                    <span>(username pernah sudah terdaftar)</span>
                  </div>
                )}
                <input
                  type="text"
                  className="form-control customPlaceholder"
                  value={personalMember.instagram}
                  id="instagram"
                  name="instagram"
                  placeholder="cth: @username"
                  onChange={handleChange}
                />
              </div>
              <div id="jenisKelamin" className="w-2/6 md:w-1/2">
                <label
                  htmlFor="jenisKelamin"
                  className="font-semibold text-sm lg:text-base 2xl:text-lg"
                >
                  Jenis Kelamin
                </label>
                <select
                  className="form-control customPlaceholder"
                  id="jenisKelamin"
                  name="jenisKelamin"
                  value={personalMember.jenisKelamin}
                  onChange={handleChange}
                >
                  <option className="text-gray-400" value="Laki-laki">
                    Laki-laki
                  </option>
                  <option className="text-gray-400" value="Perempuan">
                    Perempuan
                  </option>
                </select>
              </div>
            </div>
            <div id="posisi">
              <label
                htmlFor="posisi"
                className="font-semibold text-sm lg:text-base 2xl:text-lg"
              >
                Posisi di LDK
              </label>
              {warning && (
                <InvalidField
                  text="Wajib Diisi"
                  state={personalMember.posisi}
                />
              )}
              <input
                type="posisi"
                className="form-control customPlaceholder"
                value={personalMember.posisi}
                id="posisi"
                name="posisi"
                placeholder="Posisi di LDK saat ini"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="md:w-1/2 lg:w-full">
            <div className="flex justify-between gap-4">
              <div id="fakultas" className="w-1/3">
                <label
                  htmlFor="fakultas"
                  className="font-semibold text-sm lg:text-base 2xl:text-lg"
                >
                  Fakultas
                </label>
                <div className="flex flex-wrap w-full md:w-full">
                  <select
                    className="form-control customPlaceholder"
                    id="fakultas"
                    name="fakultas"
                    value={personalMember.fakultas}
                    onChange={handleChange}
                  >
                    {fakultas.map((list, index) => {
                      return (
                        <option key={index} className="text-gray-400">
                          {list.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div id="jurusan" className="w-2/3">
                <label
                  htmlFor="jurusan"
                  className="font-semibold text-sm lg:text-base 2xl:text-lg"
                >
                  Jurusan
                </label>
                <div className="flex flex-wrap w-full md:w-full">
                  <select
                    className="form-control customPlaceholder"
                    id="jurusan"
                    name="jurusan"
                    value={personalMember.jurusan}
                    onChange={handleChange}
                  >
                    {selectArray().map((list, index) => {
                      return (
                        <option key={index} className="text-gray-400">
                          {list.jurusan}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div id="ulasan">
              <label
                htmlFor="ulasan"
                className="font-semibold text-sm lg:text-base 2xl:text-lg"
              >
                Ulasanmu Tentang LDK Al-Ukhuwah
              </label>
              {warning && (
                <InvalidField
                  text="Wajib Diisi"
                  state={personalMember.ulasan}
                />
              )}
              <textarea
                type="text"
                className="form-control md:h-24 customPlaceholder"
                value={personalMember.ulasan}
                id="ulasan"
                name="ulasan"
                placeholder="Testimonial Kamu.."
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex">{ButtonSubmit()}</div>
      </div>
    </form>
  );
};

export default FormTestimonial;
