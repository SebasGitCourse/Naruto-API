import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CharacterDetails from "./Pages/CharacterDetails/CharacterDetails";
import Header from "./Components/Header/Header";
import CharactersFavorites from "./Pages/CharactersFavorites/CharactersFavorites";
import AboutPage from "./Pages/AboutPage/AboutPage";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/charDetails" element={<CharacterDetails />} />
            <Route path="/acercaDe" element={<AboutPage />} />
            <Route path="/favoritos" element={<CharactersFavorites />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
