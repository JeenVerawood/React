import Main from "./Components/Window/Main";
import Lorem from "./Components/Window/Lorem";
import Experience from "./Components/Window/Experience";
import Comen from "./Components/Window/Comen";
import Footer from "./Components/Window/Footer"
import Navbar from "./Components/Navbar";
import Hobby from "./Components/Window/Hobby";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />  
      {/* <Lorem /> */}
      <Experience />
      {/* <Comen /> */}
      {/* <Hobby /> */}
      <Footer />
    </>
  );
}