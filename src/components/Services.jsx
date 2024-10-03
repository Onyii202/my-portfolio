import React from "react";
import { FaAccessibleIcon, FaPaintBrush, FaUikit } from "react-icons/fa";
import free from "../assets/images/free.png";
import crate from "../assets/images/crate.png";
import allBirds from "../assets/images/allBirds.png";

const Services = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="pt-10 bg-gray-700 w-full h-full mt-10">
      <div className="flex flex-col items-center text-center">
        <div className="text-white">SERVICES</div>
        <p className="text-white font-bold text-2xl">
          What <span className="text-green-400">i do.</span>{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center  justify-center gap-6 pt-4">
        <div className=" w-3/4 md:w-1/4  h-72 border border-green-400 p-10 rounded-lg bg-green-300">
          <FaAccessibleIcon className="text-3xl" />
          <h1 className="font-black text-2xl">Web Development</h1>
          <hr className="w-32 bg-black h-0.5 mt-4  border-0" />
          <p className="pt-4">
            i use my knowledge of various programming language such as
            HTML5,CSS3,JAVASCRIPT,TAILWIND to build digital solutions for users.
          </p>
        </div>
        <div className="w-3/4 md:w-1/4 h-72 border border-green-400 p-10 rounded-lg bg-gray-700">
          <FaUikit className="text-3xl" />
          <h1 className="font-black text-2xl">Ui Design</h1>
          <hr className="w-3/4 bg-gray-400 h-0.5 mt-4  border-0" />
          <p className="text-white pt-4">
            Creating user-centric digital experiences that seamlessly blend
            aesthetics and functionality.Experts in user centered design and
            responsive interfaces.
          </p>
        </div>
        <div className="w-3/4 md:w-1/4 h-72 border border-green-400 p-10 rounded-lg bg-gray-700">
          <FaPaintBrush className="text-3xl" />
          <h1 className="font-black text-2xl">Content Writing</h1>
          <hr className="w-32 bg-gray-400 h-0.5 mt-4  border-0" />
          <p className="text-white pt-4">
            Weaving impactful narratives and delivering engaging content that
            resenates with readers. skillfully combining creativity with
            research to create compelling pieces.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center pt-10">
        <div className="text-white">PORTFOLIO</div>
        <p className="text-white font-bold text-2xl">
          Featured <span className="text-green-400">projects.</span>{" "}
        </p>
      </div>
      <div className="pb-10 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center pt-8">
        <div className="flex flex-col items-center">
          <div
            style={{ width: "380px", height: "440px", overflow: "hidden" }}
            className="border border-green-400 flex px-8
          justify-center items-center rounded-lg "
          >
            <img
              src={free}
              alt="free"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // width: "330px",
                height: "380px",
              }}
            />
          </div>
          <h1 className="font-bold text-2xl text-white">Help Scout</h1>
          <p className="text-gray-400 text-lg">
            A better way to talk with your customers
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            style={{ width: "380px", height: "440px" }}
            className="border border-green-400 flex 
          justify-center items-center rounded-lg px-8"
          >
            <img
              src={crate}
              alt="crate"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // width: "330px",
                height: "380px",
              }}
            />
          </div>
          <h1 className="font-bold text-2xl text-white">Crate & Barel</h1>
          <p className="text-gray-400 text-lg">
            We give your home the best Decor
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            style={{ width: "380px", height: "440px" }}
            className="border border-green-400 flex 
          justify-center items-center rounded-lg px-8"
          >
            <img
              src={allBirds}
              alt="allBirds"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // width: "330px",
                height: "380px",
              }}
            />
          </div>
          <h1 className="font-bold text-2xl text-white">All birds</h1>
          <p className="text-gray-400 text-lg">
            Made from Tress.Designed from Sun
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            style={{ width: "380px", height: "440px" }}
            className="border border-green-400 flex 
          justify-center items-center rounded-lg px-8"
          >
            <img
              src={free}
              alt="free"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // width: "330px",
                height: "380px",
              }}
            />
          </div>
          <h1 className="font-bold text-2xl text-white">Help Scout</h1>
          <p className="text-gray-400 text-lg">
            A better way to talk with your customers
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div
            style={{ width: "380px", height: "440px" }}
            className="border border-green-400 flex 
          justify-center items-center rounded-lg px-8"
          >
            <img
              src={crate}
              alt="crate"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // width: "330px",
                height: "380px",
              }}
            />
          </div>
          <h1 className="font-bold text-2xl text-white">Crate & Barel</h1>
          <p className="text-gray-400 text-lg">
            We give your home the best Decor
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            style={{ width: "380px", height: "440px" }}
            className="border border-green-400 flex 
          justify-center items-center rounded-lg px-8"
          >
            <img
              src={allBirds}
              alt="allBirds"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // width: "330px",
                height: "380px",
              }}
            />
          </div>
          <h1 className="font-bold text-2xl text-white">All birds</h1>
          <p className="text-gray-400 text-lg">
            Made from Trees.Designed from Sun
          </p>
        </div>
      </div>
    </div>
  );
});

export default Services;
