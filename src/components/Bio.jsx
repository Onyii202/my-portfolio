import React, { useState } from 'react'
import techGirl from '../assets/images/techGirl.png'
import { FaBriefcase, FaJavascript } from 'react-icons/fa'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import atom from '../assets/images/atom.png'
import "../assets/styles/style.css";


const Bio = React.forwardRef ((props, ref) => {
  const[animate, setAnimate] = useState(false);
  const handleImageClick = () =>{
    setAnimate(!animate);
  }
  return (
    <div ref={ref} className="bg-current w-full h-full pb-20">
      <div className="flex flex-col items-center text-center pt-10">
        <div className="text-white">MY BIO</div>
        <p className="text-white font-bold text-2xl">
          About <span className="text-green-400">me.</span>{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center pl-6 pt-4">
        <div
          className="relative rounded-full border border-green-400 flex justify-center items-center cursor-pointer "
          style={{ width: "350px", height: "350px", flexShrink: "0" }}
          onClick={handleImageClick}
        >
          <img
            src={techGirl}
            alt="techGirl"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "50%",
              width: "300px",
              height: "300px",
            }}
          />
          <img
            src={html}
            alt="HTML"
            className={`absolute rounded-full border border-green-400 ${
              animate ? "animate" : ""
            }`}
            style={{
              width: "45px",
              top: "0",
              left: "50%",
              transform: "translateX(50%)",
            }}
          />

          <img
            src={css}
            alt="CSS"
            className={`absolute rounded-full border border-green-400 ${
              animate ? "animate" : ""
            }`}
            style={{
              width: "45px",
              top: "50%",
              left: "0",
              transform: "translateY(50%)",
            }}
          />
          <img
            src={js}
            alt="JavaScript"
            className={`absolute rounded-full border border-green-400 ${
              animate ? "animate" : ""
            }`}
            style={{
              width: "45px",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
            }}
          />
          <img
            src={atom}
            alt="Atom"
            className={`absolute rounded-full border border-green-400 ${
              animate ? "animate" : ""
            }`}
            style={{
              width: "45px",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
        <div
          className="md:px-24 mt-8 md:mt-0 font-bold  "
          style={{ fontSize: "18px", lineHeight: "1.8" }}
        >
          <p className="text-white">
            Hi, I'm Onyinye, a passionate Frontend Developer with a flair for
            creating stunning and functional websites. With expertise in HTML,
            CSS, JavaScript, and React, I specialize in transforming ideas into
            seamless digital experiences that are both visually captivating and
            user-friendly.
          </p>
          <p className="text-white">
            Driven by a love for design and code, I take pride in pushing the
            boundaries of web development to craft responsive, accessible, and
            interactive websites. I thrive on collaboration, always excited to
            work on projects that challenge my creativity and technical skills.
          </p>
          <p className="text-white pb-8">
            I’m constantly exploring new trends and technologies in web
            development, ensuring my work stays at the forefront of innovation.
            Whether working solo or in a team, I bring a blend of creativity,
            technical expertise, and a collaborative spirit to every project I
            take on.
          </p>
          <button
            className="bg-green-300 w-40 h-12 rounded-md inline-flex items-center justify-center
             space-x-2 gap-2"
          >
            View Resume
            <FaBriefcase />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center px-10 pt-8">
        <div className=" pt-10">
          <div className="text-white">SKILLS</div>
          <p className="text-white font-bold text-2xl">
            Technical <span className="text-green-400">Skills.</span>{" "}
          </p>
          <div
            className="text-white md:pr-24 md:mt-0  font-bold pt-6"
            style={{ fontSize: "18px", lineHeight: "1.8" }}
          >
            <p>
              With a strong command of HTML, CSS, JavaScript, and React, I
              collaborate closely with designers and backend developers to
              create cohesive, functional websites. My focus is not only on
              writing clean code but also on solving technical challenges that
              improve user experience and performance.
            </p>
            <p>
              I’m proficient in frontend technologies such as HTML5, CSS3,
              JavaScript, and React, with a focus on developing highly
              responsive and visually appealing websites. Whether building from
              scratch or improving existing codebases, I adapt quickly to new
              technologies and methodologies to create efficient and scalable
              solutions.
            </p>
          </div>
        </div>
        <section className="font-bold pt-6">
          <div className="flex flex-row items-center justify-center gap-4 pb-6">
            <span
              className=" rounded-full h-20 w-20 flex items-center justify-center text-white
                  border border-green-400 bg-gray-700"
            >
              HTML5
            </span>
            <span
              className="rounded-lg border border-green-400 flex items-center 
                  justify-center text-white w-36 h-14 bg-gray-700"
            >
              JAVASCRIPT
            </span>
            <span
              className=" rounded-full h-20 w-20 flex items-center justify-center text-white
                  border border-green-400 bg-gray-700"
            >
              CSS3
            </span>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 pb-6">
            <span
              className="rounded-full border border-green-400 flex items-center 
                  justify-center text-white w-36 h-14 bg-gray-700"
            >
              REACT
            </span>
            <span
              className="rounded-lg border border-green-400 flex items-center 
                  justify-center text-white w-36 h-14 bg-gray-700"
            >
              TAILWIND
            </span>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <span
              className="rounded-lg border border-green-400 flex items-center 
                  justify-center text-white w-36 h-14 bg-gray-700"
            >
              UI DESIGN
            </span>
            <span
              className="rounded-full border border-green-400 flex items-center 
                  justify-center text-white w-36 h-14 bg-gray-700"
            >
              TYPESCRIPT
            </span>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Bio