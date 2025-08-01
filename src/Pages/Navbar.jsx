import React, { useState } from 'react'
import logoblack from '../../public/logo-black.webp'
import Button from '../UI/Button'
import { Menu, X } from 'lucide-react' // install with: npm install lucide-react

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white  py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <img src={logoblack} alt="Bharat Worker Logo" className="h-12" />
          </a>
        </div>

        {/* Hamburger Menu - Mobile Only */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <a href="/services" className="hover:text-blue-600">
            Services
          </a>
          <a href="/how-it-works" className="hover:text-blue-600">
            How It Works
          </a>
          <a href="/about" className="hover:text-blue-600">
            About
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-center text-sm">
            <p className="text-gray-500 text-xs font-medium">Need Help?</p>
            <h5 className="text-blue-950 font-semibold text-lg">
              +91 98765 43210
            </h5>
          </div>
          <Button
            title="Download App"
            onClick={() => alert('Download clicked')}
          />
        </div>
      </div>

      {/* Sidebar - Mobile Only */}
      {menuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-6 space-y-4 z-40">
          <a href="/" className="block text-gray-800 hover:text-blue-600">
            Home
          </a>
          <a
            href="/services"
            className="block text-gray-800 hover:text-blue-600"
          >
            Services
          </a>
          <a
            href="/how-it-works"
            className="block text-gray-800 hover:text-blue-600"
          >
            How It Works
          </a>
          <a href="/about" className="block text-gray-800 hover:text-blue-600">
            About
          </a>
          <a
            href="/contact"
            className="block text-gray-800 hover:text-blue-600"
          >
            Contact
          </a>
          <div className="pt-2 border-t">
            <p className="text-gray-500 text-sm">Need Help?</p>
            <h5 className="text-blue-600 font-semibold mb-2">
              +91 98765 43210
            </h5>
            <Button
              title="Download App"
              onClick={() => alert('Download clicked')}
            />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
