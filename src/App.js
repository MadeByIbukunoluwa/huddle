import { ThemeProvider } from "styled-components";
import { Container } from "./Components/styles/Container.styled";
import Header from "./Components/Header";
import GlobalStyles from "./Components/styles/Global";
function App() {
  const theme = {
    colors : {
      header:"#ebfbff",
      body:"#fff",
      footer:"#003333",
    },
    mobile:"768px"
  }
  return (
    <ThemeProvider theme={theme} > 
    <>
    <GlobalStyles/>
<Header/>
<Container>
  <h1>Hello World </h1>
</Container>
    </>
    </ThemeProvider>
  );
}

export default App;
