
const HomePage = () => {
  return (
    <>
      <section className={`coverHero bg-[url('/images/LDK-Flag.jpg')] z-10`}>
      </section>
      <div className="relative h-screen flex container z-20 md:pt-44 w-full">
        <div className="grid grid-cols-1 my-auto">
          <div id="heading" className="text-white w-full md:w-4/5 lg:w-2/3 mx-auto">
            <h2 className="text-sky-600 brightness-110 font-semibold text-2xl text-center">
              #CerdasKreatifBersahabat
            </h2>
            <h2 className="text-center py-2 w-full font-extrabold text-4xl sm:text-4xl xl:text-6xl">
              Bersama Menjalin Ukhuwah Bersatu Dalam Dakwah
            </h2>
            <p className="text-white font-extralight italic w-full mx-auto text-base md:text-lg xl:text-xl text-center">
              Maka sampaikanlah (Muhammad) secara terang-terangan segala apa
              yang diperintahkan (kepadamu) dan berpalinglah dari orang yang
              musyrik (QS. Al-Hijr [15]:94)
            </p>
            <div className="mt-4 space-x-2 w-full md:w-3/4 mx-auto flex justify-center flex-wrap items-center text-center">
              <button className="bg-cyan-500 my-2 text-xs md:text-base py-3 cursor-pointer px-8 hover:scale-105 rounded-md max-w-sm">
                Yuk Bergabung Dengan LDK{" "}
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
