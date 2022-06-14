import "./App.css";
import NavBar from "./components/NavBar";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import { auth } from "./components/auth";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    name: "",
    id: 0,
    email: "",
    status: false,
  });

  useEffect(() => {
    const func = async () => {
      const data = await axios.get("http://localhost:3000/api/auth", {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      if (data.data.error) {
        console.log(data.data.error);
      } else {
        setUser({
          name: data.data.name,
          id: data.data.id,
          email: data.data.email,
          status: true,
        });
      }
    };
    func();
  }, []);
  return (
    <div className="App">
      <auth.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </auth.Provider>
    </div>
  );
}

export default App;
