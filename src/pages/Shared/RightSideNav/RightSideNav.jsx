import {
  FaGoogle,
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import swimming from "../../../assets/qZone1.png";
import ground from "../../../assets/qZone3.png";
import classRoom from "../../../assets/qZone2.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-3 space-y-3">
        <h2 className="text-2xl font-bold">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with GitHub
        </button>
      </div>
      <div className="p-3 space-y-3 mt-3">
        <h2 className="text-2xl font-bold pb-2">Find Us On</h2>
        <div>
          <a
            href=""
            className="flex items-center p-4 gap-3 text-lg font-medium border rounded-t-lg"
          >
            <h2 className="bg-gray-100 p-2 rounded-full">
              <FaFacebookF />
            </h2>
            Facebook
          </a>
          <a
            href=""
            className="flex items-center p-4 gap-3 text-lg font-medium border-x"
          >
            <h2 className="bg-gray-100 p-2 rounded-full">
              <FaTwitter />
            </h2>
            Twitter
          </a>
          <a
            href=""
            className="flex items-center p-4 gap-3 text-lg font-medium border rounded-b-lg"
          >
            <h2 className="bg-gray-100 p-2 rounded-full">
              <FaInstagram />
            </h2>
            Instagram
          </a>
        </div>
      </div>
      <div className="p-2 space-y-3 bg-gray-100">
        <h2 className="text-2xl font-bold">Q-Zone</h2>
        <img src={swimming} alt="" />
        <img src={classRoom} alt="" />
        <img src={ground} alt="" />
      </div>
      <div>
        <div className="hero bg-black text-white my-4 py-4">
          <div className="hero-content text-center ">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">
                Create an Amazing Newspaper
              </h1>
              <p className=" text-base py-6">
                Discover thousands of options, easy to customize layouts,
                one-click to import demo and much more.
              </p>
              <button className="bg-red-600 p-3">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
