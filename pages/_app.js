import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  body{
    padding:0;
    margin:0;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />  
        
    </>
  );
}
