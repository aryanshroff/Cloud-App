import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";





function App() {
  const box_array=[{ val1:"100%", val2:"Completion"},{val1:"24/7" , val2:"Delivery"},{val1:"100K" ,val2:"Transactions"}]
  
  return (
    <>
      <Navbar></Navbar>
      <Hero ></Hero>
      <About></About>
      <Support></Support>
      <AllInOne></AllInOne>
      <Pricing></Pricing>
      <Footer></Footer>
      
      
      
      
    </>
  );
}

export default App;
