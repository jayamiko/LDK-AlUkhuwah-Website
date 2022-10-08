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

export const FormRegistration = ({
  formRef,
  success,
  personalMember,
  warning,
  title,
  name,
  gender,
  handleChange,
  handleSubmit,
  loading,
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
            className="cursor-no-drop bg-cyan-500 opacity-70 font-semibold px-5 py-2 rounded-md text-white uppercase hover:font-bold"
            disabled
          >
            Submit..
          </button>
        ) : (
          <button
            type="submit"
            className="bg-cyan-500 font-semibold px-5 py-2 rounded-md text-white uppercase hover:font-bold"
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
      className="flex items-center mt-28 w-full space-y-1"
      method="post"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className="w-full text-white">
        <div className="flex flex-col items-center py-1 my-1">
          <h2
            className={`uppercase font-medium font-titan md:text-center text-lg sm:text-xl lg:text-2xl tracking-wide ${
              title !== "Bergabung Bersama Kami!"
                ? "text-green-500 brightness-125"
                : "text-white"
            }`}
          >
            {title}
          </h2>
          <p
            className={`${
              name ? "block" : "hidden"
            } m-0 text-sm sm:text-base italic`}
          >
            {success && gender == "Perempuan" ? `Ukh, ${name}` : `Akh, ${name}`}
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row md:space-x-2 lg:space-x-10">
          <div className="md:w-1/2 lg:w-full">
            <div>
              <label
                htmlFor="fullName"
                className="font-semibold text-sm lg:text-base"
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
            <div>
              <label
                htmlFor="email"
                className="font-semibold text-sm lg:text-base"
              >
                Alamat Email
              </label>
              {warning && (
                <InvalidField text="Wajib Diisi" state={personalMember.email} />
              )}
              <input
                type="email"
                className="form-control customPlaceholder"
                value={personalMember.email}
                id="email"
                name="email"
                placeholder="Alamat E-mail"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between flex-wrap">
              <div className="w-3/5 md:w-2/5">
                <label
                  htmlFor="tanggalLahir"
                  className="font-semibold text-sm lg:text-base"
                >
                  Tanggal Lahir
                </label>
                {warning && (
                  <InvalidField
                    text="Wajib Diisi"
                    state={personalMember.tanggalLahir}
                  />
                )}
                <input
                  type="date"
                  className="form-control customPlaceholder"
                  value={personalMember.tanggalLahir}
                  id="tanggalLahir"
                  name="tanggalLahir"
                  placeholder="Tanggal Lahir"
                  onChange={handleChange}
                />
              </div>
              <div className="w-2/6 md:w-1/2">
                <label
                  htmlFor="jenisKelamin"
                  className="font-semibold text-sm lg:text-base"
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
              <div className="w-full">
                <label
                  htmlFor="whatsapp"
                  className="font-semibold text-sm lg:text-base"
                >
                  Whatsapp
                </label>
                {warning && (
                  <InvalidField
                    text="Wajib Diisi"
                    state={personalMember.whatsapp}
                  />
                )}
                <input
                  type="text"
                  className="form-control customPlaceholder"
                  value={personalMember.whatsapp}
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="Number WhatsApp"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 lg:w-full">
            <div className="flex justify-between gap-4">
              <div className="w-1/3">
                <label
                  htmlFor="fakultas"
                  className="font-semibold text-sm lg:text-base"
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
              <div className="w-2/3">
                <label
                  htmlFor="jurusan"
                  className="font-semibold text-sm lg:text-base"
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
            <div>
              <label
                htmlFor="pengalamanOrganisasi"
                className="font-semibold text-sm lg:text-base"
              >
                Pengalaman Organisasi
              </label>
              {warning && (
                <InvalidField
                  text="Wajib Diisi"
                  state={personalMember.pengalamanOrganisasi}
                />
              )}
              <textarea
                type="text"
                className="form-control md:h-20 customPlaceholder"
                value={personalMember.pengalamanOrganisasi}
                id="pengalamanOrganisasi"
                name="pengalamanOrganisasi"
                placeholder="Ceritakan Pengalaman Organisasimu"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="alasan"
                className="font-semibold text-sm lg:text-base"
              >
                Alasan Masuk LDK ?
              </label>
              {warning && (
                <InvalidField
                  text="Wajib Diisi"
                  state={personalMember.alasan}
                />
              )}
              <textarea
                type="text"
                className="form-control md:h-14 customPlaceholder"
                value={personalMember.alasan}
                id="alasan"
                name="alasan"
                placeholder="Alasan kamu masuk LDK ?"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex md:justify-center my-3">{ButtonSubmit()}</div>
      </div>
    </form>
  );
};

export default FormRegistration;
