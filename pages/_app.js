import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import Footer from "../components/layout/Footer/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const UKM = "Lembaga Dakwah Kampus";
export const alUkhuwah = "LDK Al Ukhuwah";
export const kampus = "Universitas Islam '45 Bekasi";
export const emailLDK = "ldkunisma45@gmail.com";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
