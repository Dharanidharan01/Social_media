import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import LandingPage from "./Component/LandingPage";
import Footer from './Component/Footer';
import AboutUs from "./Component/AboutUs";
import ContactUs from "./ContactUs";
import Chatbot from "./Component/Chatbot";
import RightsReserved from "./Component/RightsReserved";
import User from "./User";
import LoginSignUp from "./LoginSignUp";
import SearchPage from "./redux/Search";
import ExplorePage from "./redux/Explore";
// import ChatApp from "./redux/Chat";
import ReelsPage from "./redux/ReelsPage";
import Home2 from "./Home2";
import Home2F from "./Home2";
import News from "./News";
import Sports from "./Sports";
import Cine from "./Cine";
import Shopping from "./Shopping";
import PrivacyCookies from "./PrivacyCookies";
import NotificationPage from "./NotificationPage";
import ChatPage from "./ChatPage";
const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleSignup = (username) => {
    
    setUser(username);
  };

  return (
    <Router>
      <nav>
        <ul>
          
        </ul>
      </nav>

      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/home" element={<Home username={user} />} />
        <Route path="/aboutus" element={<AboutUs username={user} />} />
        <Route path="/contactus" element={<ContactUs username={user} />} />
        <Route path="/chatbot" element={<Chatbot username={user} />} />
        <Route path="/loginsignup" element={<LoginSignUp username={user} />} />
        <Route path="/rightsreserved" element={<RightsReserved username={user} />} />
        <Route path="/user" element={<User username={user} />} />
        <Route path="/search" element={<SearchPage username={user} />} />
        <Route path="/explore" element={<ExplorePage username={user} />} />
        {/* <Route path="/chat" element={<ChatApp username={user} />} />   */}
        <Route path="/reels" element={<ReelsPage username={user} />} />  
        <Route path="/home2" element={<Home2F username={user} />} />  
        <Route path="/news" element={<News username={user} />} />  
        <Route path="/sports" element={<Sports username={user} />} />  
        <Route path="/cine" element={<Cine username={user} />} />  
        <Route path="/shopping" element={<Shopping username={user} />} />  
        <Route path="/policy" element={<PrivacyCookies username={user} />} />  
        <Route path="/notify" element={<NotificationPage username={user} />} />  
        <Route path="/chat" element={<ChatPage username={user} />} />  
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
