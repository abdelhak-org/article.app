import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header, NavBar } from "./components/index.jsx";
import { AboutUs,CreateUserPage, Articles, HomePage, LoginPage} from "./pages/index";
import Footer from "./components/Footer";
function App() {
  const [posts, setPosts] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const Data = await response.json();
      setPosts(Data);
    };
    FetchData();
  }, []);
  return (
    <Router>
      <NavBar getSearchValue={setSearchValue} />
      <Header/>
      <Routes>
        <Route  exact path="/" element ={<HomePage searchValue={searchValue} posts={posts} />} />
        <Route exact path="aboutus" element={<AboutUs />} />
        <Route exact path="articles" element={<Articles />} />
        <Route exact path="createuser" element={<CreateUserPage />} />
        <Route exact path="login" element={<LoginPage />} />


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
