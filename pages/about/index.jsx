import React from "react";
import { kampus, alUkhuwah } from '../_app'
import Title from '../../components/utils/Title'
import { materialsAbout } from "../../data/data";

const About = () => {
  return (
    <>
      <section id="hero" className={`coverHero bg-[url('/images/LDK-Flag.jpg')] z-10 border-4`}>
      </section>
      <Title title="Tentang LDK" />
      <main className="relative z-40 container mx-auto my-5 text-sky-800 px-4 sm:px-0">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-titan m-0">Tentang UKM {alUkhuwah}</h1>
        <i className="font-medium md:text-lg lg:text-xl mt-2">{kampus}</i>
        <br/><br/>
        <div className="flex h-full flex-col justify-center text-black">
          <article>
            {materialsAbout.map((content, index) => {
              return (
                <>
                  <div
                    className="flex items-center justify-between text-black"
                    key={index}
                  >
                    <h1 className="text-2xl text-sky-800 uppercase font-bold">
                      {content.title}
                    </h1>
                  </div>
                  <div
                    id={content.id}
                    className="py-2 text-black text-base sm:text-lg leading-6"
                  >
                    {content.p1 && <p>{content.p1}</p>}
                    {content.p2 && <p>{content.p2}</p>}
                    {content.p3 && <p>{content.p3}</p>}
                    {content.p4 && <p>{content.p4}</p>}
                  </div>
                </>
              );
            })}
            {/* VISI MISI */}
            <>
              <div className="flex items-center justify-between text-black">
                <h1 className="text-2xl text-sky-800 uppercase font-bold">
                  C. Visi dan Misi
                </h1>
              </div>
              <div
                id="material-3"
                className="py-2 text-black text-base sm:text-lg leading-6"
              >
                <h2 className="font-bold text-xl">Visi</h2>
                <p>
                  {'Lembaga Dakwah Kampus memiliki visi "Mewujudkan Komunitas Kampus Islami".'}
                </p>
                <h2 className="font-bold text-xl m-0">Misi</h2>
                <ul className="list-decimal list-outside pl-4">
                  <li>
                    Berpegang Teguh pada {"Al-Qur'an"} dan As Sunnah dalam mencetak
                    kader-kadernya sebagai Anashir At Taghylr (Agen Perubahan)
                    yang kreatif dan inovatif
                  </li>
                  <li>
                    Membangun kesadaran seluruh anggota dan sivitas akademika akan
                    pentingnya penerapan nilai-nilai Islam dalam kehidupan kampus
                    demi menopang peningkatan kualitas akademik.
                  </li>
                  <li>
                    Menjalin Ukhuwah Islamiah dan kerjasama dalam seluruh lini
                    kehidupan intra dan ekstra kampus serta berperan aktif dan
                    kreatif di dalamnya.
                  </li>
                  <li>
                    Melakukan amar ma’ruf nahi munkar serta membangun opini publik
                    yang islami secara kontinu dan konsisten.
                  </li>
                  <li>
                    Menjadi mediator dan advokator (amal khidami) bagi pemenuhan
                    kebutuhan akademik mahasiswa.
                  </li>
                  <li>
                    Membangun jaringan komunikasi efektif dengan LDK lainnya,
                    khususnya wilayah bekasi dan nasional pada umumnya.
                  </li>
                </ul>
              </div>
            </>

            {/* NILAI ORGANISASI */}
            <>
              <div className="flex items-center justify-between text-black">
                <h1 className="text-2xl text-sky-800 uppercase font-bold">
                  D. Nilai-Nilai Organisasi
                </h1>
              </div>
              <div
                id="material-4"
                className="py-2 text-black text-base sm:text-lg leading-6"
              >
                <ul className="p-0">
                  <li id="islami">
                    <h2 className="font-bold text-xl">1. Islami</h2>
                    <p>
                      {alUkhuwah} senantiasa menjunjung tinggi nilai-nilai
                      Islami sebagai dasar ideologinya Nilai-nilai keislaman harus
                      direpresentasikan dalam perilaku setiap anggotanya, karena
                      mereka memiliki kesadaran, dorongan, dan tanggung jawab
                      untuk berperilaku sesuai ajaran agama Islam. {alUkhuwah}
                      berupaya untuk menunjukkan keindahan cahaya islam melalui
                      perilaku para anggotanya.
                    </p>
                  </li>

                  <li id="nasionalisme">
                    <h2 className="font-bold text-xl">2. Nasionalisme</h2>
                    <p>
                      Cinta pada tanah air merupakan rasa yang terus ditanamkan
                      dalam diri anggota {alUkhuwah}. Kesadaran untuk membela
                      negara dan mengharumkan nama bangsa selalu melekat dalam
                      jiwa kader {alUkhuwah}.
                    </p>
                  </li>

                  <li id="persaudaraan">
                    <h2 className="font-bold text-xl">3. Persaudaraan</h2>
                    <p>
                      Nilai-nilai persaudaraan menjadi landasan aktivitas sosial
                      organisasi. Nilai itu menjadi pedoman bagi para anggota
                      dalam berinteraksi. Masing-masing anggota tidak menganggap
                      yang lainnya sekedar sebagai anggota formal, namun lebih
                      dari itu, seperti saudara sendiri. Dengan rasa persaudaraan,
                      aktivitas dan suasana organisasi menjadi bersifat
                      kekeluargaan, saling menghormati dan menghargai.
                    </p>
                  </li>

                  <li id="militansi">
                    <h2 className="font-bold text-xl">4. Militansi</h2>
                    <p>
                      Dalam bekerja menjalankan tugas dan program organisasi,
                      militansi terus ditanamkan dalam diri anggotanya. Para
                      anggota bekerja dengan penuh tanggung jawab, ikhlas, terbuka
                      dan bergotong-royong.
                    </p>
                  </li>
                  <li id="akademis">
                    <h2 className="font-bold text-xl">5. Akademis</h2>
                    <p>
                      Nilai lainya yang ditanamkan kepada anggota {alUkhuwah}
                      adalah nilai-nilai akademisi sebagai serorang mahasiswa
                      seperti keuletan, rajin, dan aktif berdiskusi.
                    </p>
                  </li>
                </ul>
              </div>
            </>

            {/* PROGRAM UNGGULAN */}
            <>
              <div className="flex items-center justify-between text-black">
                <h1 className="text-2xl text-sky-800 uppercase font-bold m-0">
                  E. Program Unggulan
                </h1>
              </div>
              <div
                id="material-5"
                className="text-black text-base sm:text-lg"
              >
                <ul className="list-decimal list-outside pl-4">
                  <li id="dauroh">
                     DAUROH
                  </li>
                  <li id="training">
                    Training Manajemen Organisasi
                  </li>
                  <li id="urkais">
                    URKAIS (Urgensi Kajian Islam)
                  </li>
                  <li id="diantar">
                    DIANTAR (Dialog Antar Kita)
                  </li>
                  <li id="mabit">
                    Mabit (Malam Bina Iman dan Taqwa)
                  </li>
                  <li id="ramadhan">
                    Ramadhan Smile in Campus
                  </li>
                  <li id="mabit">
                    BOM (Bursa Obrolan Muslimah)
                  </li>
                </ul>
                <br />
                <br />
              </div>
            </>
          </article>
        </div>
      </main>
    </>
  );
};

export default About;
