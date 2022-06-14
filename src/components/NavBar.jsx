import React, { useContext } from "react";
import { auth } from "./auth";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { user, setUser } = useContext(auth);
  const token = localStorage.getItem("token");

  const handlelogout = () => {
    setUser({ name: "", id: 0, email: "", status: false });
    localStorage.removeItem("token");
  };
  return (
    <>
      <div className="w-full bg-red-500 py-3">
        {!token ? (
          <div>
            <button className="bg-blue-500 p-3 rounded-md text-white mx-3">
              <NavLink to="/signup">SignUp</NavLink>
            </button>
            <button className="bg-green-500 p-3 rounded-md text-white mx-3">
              <NavLink to="/login">Login</NavLink>
            </button>
          </div>
        ) : (
          <div>
            <button
              className="bg-blue-500 p-3 rounded-md text-white mx-3"
              onClick={handlelogout}
            >
              LogOut
            </button>
            <div>
              <span>Hello!{user.name}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
