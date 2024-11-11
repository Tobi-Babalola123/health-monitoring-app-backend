import React from "react";

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-900">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section: Form */}
        <div className="p-8 md:w-1/2 w-full">
          <div className="text-center mb-6">
            <img
              src="/path/to/logo.png"
              alt="Heads Up Logo"
              className="h-12 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
            <p className="text-gray-500 mt-2">
              Please enter your credentials to proceed.
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
                placeholder="example@example.com"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
                placeholder="••••••••"
              />
              <div className="text-right mt-1">
                <a
                  href="/forgot-password"
                  className="text-blue-500 text-sm hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="keepSignedIn"
              >
                Keep me signed in for
              </label>
              <select
                id="keepSignedIn"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
              >
                <option>1 day</option>
                <option>1 week</option>
                <option>1 month</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-400"
              >
                Login
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-6 text-center text-sm text-gray-500">
            - or sign in with -
          </div>

          {/* Social Buttons */}
          <div className="mt-4 space-y-2">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              <i className="fab fa-apple mr-2 text-lg"></i> Apple
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              <i className="fab fa-google mr-2 text-lg"></i> Google
            </button>
          </div>

          {/* Sign-up Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="/sign-up" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>

          <p className="mt-6 text-xs text-gray-500 text-center">
            HIPAA regulations require automatic sign-out for Practitioner Users
            due to inactivity
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/path/to/your-right-side-image.png"
            alt="App Preview"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
