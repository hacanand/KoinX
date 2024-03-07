import TrendingCryptoDashboard from "./components/TrendingCryptoDashboard";
import CryptoInfoCard from "./components/CryptoInfoChart";
import InformationSection from "./components/InformationSection"; 
import Navbar from "./components/Navbar";
import NavigationBarDashboard from "./components/NavigationBarDashboard";
import RightCard from "./components/RightCard";
import SentimentAnalysis from "./components/SentimentAnalysis";
import TeamMembers from "./components/TeamMembers";
import Tokenomics from "./components/Tokenomics";
import TrendingCoins from "./components/TrendingCoins";
import Navigation from "./helper/Navigation";
import NavigationBar from "./helper/NavigationBar";

function App() {
  return (
    <div className="h-full w-full bg-slate-100">
      <div className="flex flex-col">
        <Navbar />
        <Navigation />
        <div className="md:flex m-1 md:m-0">
          <div className="flex flex-col gap-6 md:ml-10">
            <CryptoInfoCard />
            <NavigationBar />
            <NavigationBarDashboard />
            <SentimentAnalysis />
            <InformationSection />
            <Tokenomics />
            <TeamMembers />
          </div>
          <div className="flex flex-col gap-6 md:mx-16 ">
            <RightCard />
            <TrendingCoins />
          </div>
        </div>
      </div>
      <div className="mt-16  ">
        <TrendingCryptoDashboard />
      </div>
    </div>
  );
}

export default App;
