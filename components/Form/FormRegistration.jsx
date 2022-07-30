export const FormRegistration = ({
  formRef,
  personalMember,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form
      name="submit-to-google-sheet"
      className="sm:w-2/3 md:w-3/6 lg:w-2/5 xl:w-2/6 space-y-1"
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
        className="bg-[#1eb2a6] py-2 my-4 rounded-md text-white px-5 uppercase hover:font-bold"
      >
        Submit
      </button>
    </form>
  );
};

export default FormRegistration;
