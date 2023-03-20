import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Introduction from "./Components/Introduction/Introduction";
import Productlist from "./Components/Productlist/Productlist";



function App() {
  return (
    <div className="App">
      
      <Introduction/>
      <About/>
      <Productlist/>
      <Contact/>
     
    </div>
  );
}

export default App;
