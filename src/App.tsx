import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import { SignIn } from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="userprofile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
