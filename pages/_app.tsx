import '../styles/global.css';
import type { AppProps } from 'next/app'
import Navbar from '../components/navigation/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (<> <Navbar /> <Component {...pageProps} /> </>)
}

export default MyApp
