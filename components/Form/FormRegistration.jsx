import { fakultas } from '../../data/data'

export const FormRegistration = ({
  formRef,
  personalMember,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form
      name="submit-to-google-sheet"
      className="sm:w-2/3 md:w-3/6 lg:w-2/5 xl:w-2/6 space-y-1 mb-4"
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
        <div className="w-1/5">
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
        <div className="w-2/6">
          <label htmlFor="usia">Angkatan</label>
          <input
            type="text"
            className="form-control"
            value={personalMember.study}
            id="usia"
            name="usia"
            placeholder="cth : 2019"
            onChange={handleChange}
          />
        </div>
        <div className="w-2/5">
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
          {fakultas.map((list, index)=>{
            return (
              <div key={index} className="mr-5">
                <input
                  type="radio"
                  id={list.id}
                  name="fakultas"
                  value={list.name}
                  onChange={handleChange}
                  checked
                />
                <label className="ml-1" htmlFor={list.name}>
                  {list.name}
                </label>
              </div>
            )
          })}
        </div>
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
      <div>
        <label htmlFor="reason">Alasan Masuk LDK ?</label>
        <textarea
          type="text"
          className="form-control"
          value={personalMember.reason}
          id="reason"
          name="reason"
          placeholder="Alasan Masuk LDK ?"
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-egg-green py-2 my-4 rounded-md text-white px-5 uppercase hover:font-bold"
      >
        Submit
      </button>
    </form>
  );
};

export default FormRegistration;
