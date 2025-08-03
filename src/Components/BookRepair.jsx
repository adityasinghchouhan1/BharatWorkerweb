import React, { useState, useRef, useEffect } from "react";
import {X } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import { gsap } from "gsap";
import Button from "../UI/Button";
import bookrepairvdo from "../assets/bookRepairVdo.mp4";
import bookrepairimg from "../assets/12.webp";

const BookRepair = () => {
  const [showVideo, setShowVideo] = useState(false);

  // Refs for animation
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.from(imageRef.current, { x: -100, opacity: 0, duration: 1 })
        .from(contentRef.current, { x: 100, opacity: 0, duration: 1 }, "-=0.7")
        .from(buttonRef.current, { scale: 0.8, opacity: 0, duration: 0.5 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#012878] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px]">
        {/* Left - Full Height Image with Play Button */}
        <div ref={imageRef} className="relative">
          <img
            src={bookrepairimg}
            alt="Workers Cleaning"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 m-auto flex justify-center items-center w-28 h-28 hover:bg-[#012878] rounded-md bg-yellow-400 hover:scale-110 transition duration-300"
          >
            <FaPlay className="text-black w-8 h-8 hover:text-white" />
          </button>
        </div>

        {/* Right - Text Content */}
        <div ref={contentRef} className="flex flex-col justify-center px-6 lg:px-16 py-12">
          <p className="uppercase text-xs mb-4 tracking-wider">
            <span className="bg-[#083686] p-1 px-3 font-semibold rounded-full">
              Explore in Minutes
            </span>
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            Find Trusted Workers Fast with Bharat Workers App
          </h2>
          <p className="text-base text-[#FFFFFFBF] me-24 mt-3 font-semibold mb-6">
            Discover how Bharat Workers helps you connect with verified
            professionals near you. Watch this short video to learn how our
            platform makes hiring safe, simple, and hassle-free.
          </p>
          <div ref={buttonRef} className="w-fit scale-90">
            <Button
              title="Book a Repair"
              onClick={() => (window.location.href = "book-repair.html")}
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-2/3 lg:w-1/2">
            <video
              src={bookrepairvdo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg"
            ></video>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookRepair;
