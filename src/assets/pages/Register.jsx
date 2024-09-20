import React from 'react'

const Register = () => {
  return (
    <div>
      <section className="container mx-auto p-4">
        <div className="login-section max-w-md mx-auto mt-14 bg-white shadow-lg p-6 rounded-lg">
          <form id="form" className="flex flex-col gap-4">
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              id="first_name"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              id="last_name"
              type="text"
              placeholder="Last Name"
              required
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              className="p-0"
              type="file"
              id="myfile"
              name="myfile"
              required
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div id="loadingDiv" className="mt-4">
              <div className="text-center">
                <button
                  id="registorBtn"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Register
                </button>
                <br />
              </div>
            </div>
            <a className="text-center text-blue-500 hover:underline mt-4" href="./login.html">
              ALREADY A USER? PLEASE LOGIN
            </a>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Register
