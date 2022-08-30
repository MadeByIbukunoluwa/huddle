import { ThemeProvider } from "styled-components";
import { Container } from "./Components/styles/Container.styled";
import Header from "./Components/Header";
function App() {
  const theme = {
    colors : {
      header:"#ebfbff",
      body:"#fff",
      footer:"#003333",
    }
  }
  return (
    <ThemeProvider theme={theme} > 
    <>
<Header/>
<Container>
  <h1>Hello World </h1>
</Container>
    </>
    </ThemeProvider>
  );
}

export default App;
