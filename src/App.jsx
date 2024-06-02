import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { theme } from "./styled/Themes";
import GlobalStyles from "./styled/GlobalStyles";
import content from "./../src/assets/content";
import Card from "./components/Card";
import { Main } from "./styled/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Main>
          {content.map((el, index) => {
            return <Card key={index} content={el} />;
          })}
        </Main>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
