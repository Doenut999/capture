import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";

function App() {
  return (
    <div>
        <Nav />
        <GlobalStyle />
      <AboutUs />
        <OurWork />
        <ContactUs />
    </div>
  );
}

export default App;
