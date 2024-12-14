import { useContext } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img className="w-auto h-8" src={logo} alt="SoloSphere Logo" />
            <span className="text-xl font-bold text-gray-800">SoloSphere</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="input input-bordered w-full max-w-md border p-2 rounded-lg"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
            <li className="hover:text-blue-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/jobs">All Jobs</Link>
            </li>
          </ul>

          {/* User Profile & Additional Options */}
          {user ? (
            <div className="relative flex items-center space-x-6">
              {/* Logged-in User Links */}
              <ul className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
                <li className="hover:text-blue-600">
                  <Link to="/add-job">Add Job</Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link to="/my-posted-jobs">My Posted Jobs</Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link to="/my-bids">My Bids</Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link to="/bid-requests">Bid Requests</Link>
                </li>
              </ul>

              {/* User Avatar Dropdown */}
              <div className="relative">
                <button
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar border border-gray-200"
                >
                  <div
                    title={user?.displayName}
                    className="w-10 h-10 rounded-full overflow-hidden"
                  >
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user?.photoURL}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content absolute right-0 mt-3 bg-white shadow-lg rounded-lg py-2 w-48"
                >
                  <li className="hover:bg-gray-100">
                    <Link to="/add-job">Add Job</Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link to="/my-posted-jobs">My Posted Jobs</Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link to="/my-bids">My Bids</Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link to="/bid-requests">Bid Requests</Link>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={logOut}
                      className="bg-red-100 text-red-600 py-2 px-4 w-full text-center rounded-md hover:bg-red-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu (for smaller screens) */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 focus:outline-none focus:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 mt-2">
        <input
          type="text"
          placeholder="Search for jobs..."
          className="input input-bordered w-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
