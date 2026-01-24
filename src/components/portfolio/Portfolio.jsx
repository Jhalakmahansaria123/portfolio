import "./portfolio.scss"
import { useRef } from "react";
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'

const items=[
    {
        id:1,
        title:"Weatherly",
        img:"/weatherProject.jpg",
        desc:"A simple web application that allows users to search for cities and get real-time weather data, displaying key metrics such as temperature, humidity, and wind speed through a clean interface.",
        techStack:"HTML, CSS, JavaScript, Weather API",
        demoLink:"https://heyweatherr123.netlify.app",
    },
    {
        id:2,
        title:"MyTranslator",
        img:"/MyTranslatorProject.jpg",
        desc:"A web application that allows users to translate plain text or text extracted from images into multiple languages with a simple and easy-to-use interface.The app also supports OCR-based text extraction from images, making language translation more accessible and efficient.",
        techStack:"React, Tailwind CSS, JavaScript, RapidAPI (Google Translator API), OCR (Tesseract.js)",
        demoLink:"https://mytranslator123.netlify.app/",
    },
];

const Single =({item}) =>{
    const ref= useRef();
      const {scrollYProgress} = useScroll({
        target:ref,
        });

        const y = useTransform(scrollYProgress, [0,1], [-300, 300])

    return( <section >
       <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}> 

                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <p> <b>Used: {item.techStack}</b></p>
                    <a href={item.demoLink} target="_blank" rel="noopener noreferrer"><button>See Demo</button></a>
                </motion.div>
            </div>
       </div>
    </section> )
}
const Portfolio = () => {
    const ref= useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
         offset:["end end", "start start"]
        })

    const scaleX= useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>What I've Built</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} id={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio