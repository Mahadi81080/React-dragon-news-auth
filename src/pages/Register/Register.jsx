import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
const Register = () => {
  const { creatUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const name = from.get("name");
    const photo = from.get("photo");
    const email = from.get("email");
    const password = from.get("password");
    console.log(name, email, photo, password);
    // Creat user
    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
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
            <h1 className="my-3 text-4xl font-bold">Register your account</h1>
          </div>
          <form onSubmit={handleRegister} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label htmlFor="text" className="block mb-2 text-sm">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="text" className="block mb-2 text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo url"
                  placeholder="Photo URL"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="text" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="text"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <p>Accept Term & Conditions</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
