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
      className="flex items-center h-fit w-full md:h-3/5 space-y-1"
      method="post"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className='w-full'>
        <h2 className="font-titan md:text-center text-xl sm:text-2xl mb-1 tracking-wide">
          Bergabung Bersama Kami!
        </h2>

        <div className='w-full flex flex-col md:flex-row md:space-x-2 lg:space-x-10'>
          <div className='md:w-1/2 lg:w-full'>
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
            <div className="flex justify-between flex-wrap">
              <div className="w-1/5 md:w-2/5">
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
              <div className="w-2/6 md:w-1/2">
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
              <div className="w-2/5 md:w-full">
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
          </div>

          <div className='md:w-1/2 lg:w-full'>
            <div>
              <label htmlFor="fakultas">Fakultas</label>
              <div className="flex flex-wrap w-full md:w-full">
                <select 
                  className="form-control"
                  value={personalMember.fakultas}
                  onChange={handleChange}
                >
                {fakultas.map((list, index)=>{
                  return (
                      <option key={index} className="text-gray-400">{list.name}</option>
                  )
                })}
                </select>
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
          </div>
        </div>
        
        <div className='flex md:justify-center my-2 md:my-4'>
          <button
            type="submit"
            className="bg-egg-green px-5 md:px-16 py-2 rounded-md text-white uppercase hover:font-bold"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormRegistration;
