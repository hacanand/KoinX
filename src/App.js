import CryptoInfoCard from "./components/CryptoInfoChart";
import Navbar from "./components/Navbar";
import RightCard from "./components/RightCard";
import Navigation from "./helper/Navigation";
 

function App() {
  return (
    <div className="h-full w-full  bg-slate-100">
      <div className="flex flex-col  ">
        <Navbar />
        <Navigation />
        <div className="flex ">
        <div className="flex flex-col w-full mx-16">
          
         
          <CryptoInfoCard />
        </div>
        <div>
          <RightCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
