import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Create from "./components/Create/Create";
import Navbar from "./components/Navbar/Navbar";
import Clubs from "./components/Clubs/Clubs";
import UserState from "./context/userState";
import ClubPage from "./components/ClubPage/ClubPage";
import ExploreMore from "./components/ExploreMore";
function App() {
  return (
    <Router>
      <UserState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/explore" element={<ExploreMore />} />


          <Route path="/club/:clubId" element={<ClubPage />} />
        </Routes>
        <Footer />
      </UserState>
    </Router>
  );
}

export default App;
