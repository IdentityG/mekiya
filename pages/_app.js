import PrelineScript from '../components/PrelineScript';
import '../styles/globals.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />;
    <Footer />
    <PrelineScript />
  </>
);
}

export default MyApp;
