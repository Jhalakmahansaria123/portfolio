import "./hero.scss"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const textVariants={
  initial:{
  x:-500, opacity:0,
  },
  animate:{
  x:0, opacity:1,transition:{ duration:1,staggerChildren:0.1,},
  },
  scrollButton:{
    opacity:0, y:10, transition:{ duration:2, repeat:Infinity}
  }
};

const sliderVariants={
  initial:{ x:0,
  },
  animate:{
  x:"-220%",
  transition:{
    repeat:Infinity,
    repeatType:"mirror",
    duration: 20,
  },
  },
};

const Hero = () => {
  const roles = ["Frontend Developer", "Full Stack Developer", "Software Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="hero">

      <div className="wrapper">
        <motion.div
         className="textContainer" 
        variants={textVariants} 
        initial="initial" animate="animate">

            <motion.h2 variants={textVariants}>JHALAK MAHANSARIA</motion.h2>

            <motion.h1 variants={textVariants}>
              Hi I'm a <br />
              <span>{text}</span> {/* ✅ ONLY CHANGE HERE */}
            </motion.h1>
            
            <motion.div variants={textVariants} className="buttons">
                <motion.button 
                onClick={() => { window.location.hash = "Portfolio";}}
                 variants={textVariants}>
                 See my Latest Works
                </motion.button>

                <motion.button 
                onClick={() => { window.location.hash = "Contact";}}
                variants={textVariants}>
                Contact Me
                </motion.button>
            </motion.div>

            <motion.img 
            variants={textVariants} 
            animate="scrollButton" 
            src="/scroll.png"
            id="scroll" 
            alt="" />
        </motion.div>
      </div>

      <motion.div 
        className="slidingTextContainer" 
        variants={sliderVariants} 
        initial="initial" 
        animate="animate">
        Software Developer web Developer Student
      </motion.div>

      <div className="imageContainer">
        <img src="hero4.png" alt="" />  
      </div>

    </div>
  )
}

export default Hero