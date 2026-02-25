import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const role = localStorage.getItem('userRole')

  const handleLogout = () => {
    localStorage.removeItem('userRole')
    localStorage.removeItem('userId')
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SC</span>
            </div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block">
              SmartCity
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {!role ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-blue-600 transition font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <span className="text-gray-600 capitalize">
                  {role} Dashboard
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {!role ? (
              <>
                <Link
                  to="/login"
                  className="block text-gray-600 hover:text-blue-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <div className="text-gray-600 capitalize py-2">
                  {role} Dashboard
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
