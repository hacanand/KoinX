import CryptoDashboard from "./components/CryptoDashboard";
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
    <div className="h-full w-full  bg-slate-100">
      <div className="flex flex-col  ">
        <Navbar />
        <Navigation />
        <div className="flex ">
          <div className="flex flex-col w-full mx-16">
            <CryptoInfoCard />
            <NavigationBar />
            <NavigationBarDashboard />
            <SentimentAnalysis />
            <InformationSection />
            <Tokenomics />
            <TeamMembers />
          </div>
          <div className=" flex flex-col mr-16 gap-6">
            <RightCard />
            <TrendingCoins />
          </div>
        </div>
      </div>
      <CryptoDashboard />
    </div>
  );
}

export default App;
