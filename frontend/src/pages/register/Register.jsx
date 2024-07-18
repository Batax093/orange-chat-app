import GenderCheckBox from "./GenderCheckBox";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-200">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-700 text-center mb-6">
          Register
          <span className="text-3xl font-bold leading-tight tracking-tight text-orange-500"> ChatApp</span>
        </h1>

        <form
          className="space-y-4"
          action="">
          <div>
            <span className="text-base label-text text-gray-700">Full Name</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 text-orange-500 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow w-full h-10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="John Doe"
              />
            </label>
          </div>
          <div>
            <span className="text-base label-text text-gray-700">Username</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 text-orange-500 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow w-full h-10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter Username"
              />
            </label>
          </div>
          <div>
            <span className="text-base label-text text-gray-700">Password</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 text-orange-500 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow w-full h-10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter Password"
              />
            </label>
          </div>
          <div>
            <span className="text-base label-text text-gray-700">Confirm Password</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 text-orange-500 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow w-full h-10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm Password"
              />
            </label>
          </div>

          <GenderCheckBox />

          <a
            href="#"
            className="text-sm text-gray-700 hover:underline hover:text-orange-500 mt-2 inline-block">
            Already have an account?
          </a>
          <div>
            <button className="btn btn-primary w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-sm">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
