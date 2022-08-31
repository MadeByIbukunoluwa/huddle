import { ThemeProvider } from "styled-components";
import { Container } from "./Components/styles/Container.styled";
import Header from "./Components/Header";
import Footer from "./Components/footer";
import Card from "./Components/Card";
import GlobalStyles from "./Components/styles/Global";
import content from "./content";
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
  {content.map((item,index) => {
   return <Card key={index} item={item} />; 
  })}
</Container>
<Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;
