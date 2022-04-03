
import { createGlobalStyle } from "styled-components";
import { Router } from "./routes/Router";


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  div, span, input{
    font: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }  
  body{
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      padding 20px;
      overflow-x: auto;
      overflow-y: auto;
    }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
