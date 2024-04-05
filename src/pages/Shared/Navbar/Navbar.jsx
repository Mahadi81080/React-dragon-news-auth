import { Link } from "react-router-dom";
import userImg from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleSingOut =()=>{
    logOut()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.error(error);
    })
  }
  const link = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/career">career</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <img className="w-10 h-10 mr-4" src={userImg} alt="" />
          {user ? (
            <Link onClick={handleSingOut} to="/login" className="bg-black text-white py-2 px-7">
              Sing Out
            </Link>
          ) : (
            <Link to="/login" className="bg-black text-white py-2 px-7">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
