import { useRef } from "react";
import "./services.scss"
import {motion, useInView} from 'framer-motion'

const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {

  const ref= useRef()
  const isInView=useInView(ref, {margin: "-100px"})

  return (
    <motion.div 
    className="services" 
    variants={variants}
    initial={window.innerWidth<=738 ? {x:-300, y:100, opacity:0} : "initial"}
    ref={ref} animate={ isInView && "animate"}>
     
      <motion.div className="textContainer" variants={variants}>
        <p>I enjoy turning ideas into <br /> functional web experiences</p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>My <motion.b whileHover={{color:"orange"}}>Technical</motion.b></h1>
        </div>
        <div className="title">
          <h1>Skills as a <motion.b whileHover={{color:"orange"}}> Developer</motion.b></h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>

        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h1>Basic Frontend</h1>
          <p>Built responsive websites using HTML, CSS, and JavaScript. Click below to view my projects.</p>
          
        </motion.div>

        <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
          <h1>tailwindcss</h1>
          <p>Using Tailwind CSS makes styling faster and simpler. Click on the button below to view the project where i used it.</p>
          
        </motion.div>

        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h1>DSA(Java)</h1>
          <p>Practicing DSA in Java. Solved 150+ problems on LeetCode and other platforms to improve logic and problem-solving skills. Continuing to strengthen fundamentals every day.</p>
        </motion.div>

        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h1>React</h1>
          <p>Know the basics of React and built projects using components, props, and state. Click  on the button below to view a projectwhere i used it</p>
          
        </motion.div>


      </motion.div>    
    </motion.div>
  )
}

export default Services