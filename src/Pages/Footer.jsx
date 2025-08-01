import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6'
import { IoCallSharp, IoMailSharp, IoLocationSharp } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="bg-[#161c2d] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ml-8 md:ml-0">
          {/* Logo + About */}
          <div>
            <img
              src="/images/logo.webp"
              alt="Bharat Worker"
              className="w-40 mb-4"
            />
            <p className="text-white/80 leading-relaxed">
              India’s trusted on-demand workforce platform connecting skilled
              professionals with homes and businesses for cleaning, repair, and
              more.
            </p>
            <div className="flex space-x-4 mt-6 text-lg text-white/80">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="#">Join as a Worker</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold text-white mb-4">Our Services</h5>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="/services">Construction Workers</a>
              </li>
              <li>
                <a href="/services">Plumbers & Electricians</a>
              </li>
              <li>
                <a href="/services">Painters & Carpenters</a>
              </li>
              <li>
                <a href="/services">Housekeeping & Cleaning Staff</a>
              </li>
              <li>
                <a href="/services">Packers & Movers</a>
              </li>
              <li>
                <a href="/services">Home Repair & Maintenance</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-white flex items-center gap-2">
                <IoLocationSharp className="text-yellow-400" /> Visit Our Office
              </h5>
              <p className="text-white/80 mt-1">
                Bharat Workers HQ,
                <br />
                Sector 45, Gurgaon, Haryana – 122003, India
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-white flex items-center gap-2">
                <IoCallSharp className="text-yellow-400" /> Call Us Now
              </h5>
              <p className="text-white/80 mt-1">+91-98765-43210</p>
            </div>

            <div>
              <h5 className="font-semibold text-white flex items-center gap-2">
                <IoMailSharp className="text-yellow-400" /> Send a Message
              </h5>
              <p className="text-white/80 mt-1">support@bharatworkers.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="bg-[#141a2c] border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white/70 text-xs">
          <span>© 2025 Bharat Workers. All rights reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
