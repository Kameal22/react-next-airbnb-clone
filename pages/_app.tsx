import '../styles/global.css';
import type { AppProps } from 'next/app'
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { lightTheme, darkTheme } from "../themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Component {...pageProps} changeTheme={changeTheme} />
    </ThemeProvider>
  )
}

export default MyApp
