import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import Message from "./components/Message";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import FavoritesJobs from "./components/FavoritesJobs";
import JobsMainPage from "./components/JobsMainPage";
import Rete from "./components/Rete";
import { useState } from "react";
import ModalJobs from "./components/modalJobs";

function App() {
  const error = useSelector((state) => state.currentUser.hasError);
  const errorMsg = useSelector((state) => state.currentUser.errorMessage);
  const [percorso, setPercorso] = useState(window.location.pathname);

  return (
    <div className="App">
      {error ? (
        <Alert variant="danger">{errorMsg}</Alert>
      ) : (
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/:id" element={<ProfilePage />} />
            <Route path="lavoro" element={<JobsMainPage />} />
            <Route path="rete" element={<Rete />} />
            <Route path="favoritesJobs" element={<FavoritesJobs />} />
            <Route path="lavoro/dettaglio" element={<ModalJobs />} />
          </Routes>
          <Message />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
