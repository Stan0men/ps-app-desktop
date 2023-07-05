import Donation from "./components/Donation";
import GameList from "./components/GameList";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import TopMenu from "./components/TopMenu";

const sheetID = "1R5w9sRSGOEuilUo6n8K3r1bDCGebv50jFejt1bOMZY0";
const URL = "https://docs.google.com/spreadsheets/d/" + sheetID;
// fetch(URL)
//   .then((res) => res.text())
//   .then((rep) => {
//     let data = JSON.parse(rep.substr(47).slice(0, -2));
//     console.log(rep);
//   });

console.log(URL);

const App = () => {
  return (
    <div>
      <TopMenu />
      <SearchBar />
      <GameList />
      <SearchResult />
      <Donation />
    </div>
  );
};

export default App;
