import { Link,useLocation,useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { singIn } = useContext(AuthContext);
  const location = useLocation()
  console.log('Location in the login page',location);
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const email = from.get("email");
    const password = from.get("password");
    console.log(email, password);
    // SingIn Account
    singIn(email, password)
      .then((result) => {
        console.log(result.user);
        // Navigate after login
        navigate(location?.state? location.state:'/')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-600">
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <input
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                />
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-600">
                Do not have an account yet?
                <Link
                  to="/register"
                  className="hover:underline dark:text-violet-600"
                >
                  Register
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
