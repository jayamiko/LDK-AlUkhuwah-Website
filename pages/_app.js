import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
  <Header />
    <Component {...pageProps} />
  <Footer />
    </>
  ) 
}

export default MyApp;
