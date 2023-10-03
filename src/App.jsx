import FooterDiv from "./Components/FooterDiv/FooterDiv";
import JobDiv from "./Components/JobDiv/JobDiv";
import Navbar from "./Components/Navbar/Navbar";
import SeaechDiv from "./Components/SearchDiv/SeaechDiv";
import ValueDiv from "./Components/ValueDiv/ValueDiv";


const App = () => {
  return (
    <div className="mx-auto w-[85%] ">
      <Navbar></Navbar>
      <SeaechDiv></SeaechDiv>
      <JobDiv></JobDiv>
      <ValueDiv></ValueDiv>
      <FooterDiv></FooterDiv>
    </div>
  );
};

export default App;