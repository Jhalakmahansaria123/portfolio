import {motion} from 'framer-motion';

const variants={
  open:{
    transition:{
      staggerChildren:0.1,
    }
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1,
    },
  },
}
const itemVariants={
  open:{
    y:0,
    opacity:1,
  },
  closed:{
    y:50,
    opacity:0,
  },
}
const Links = () => {
  const items = [
    { label: "Home", link: "Homepage" },
    { label: "Skills", link: "Services" },
    { label: "Projects", link: "Portfolio" },
    { label: "Contact me", link: "Contact" },
    { label: "About", link: "About" },
  ];

  return (
    <motion.div className="links" variants={variants}>
     
      {items.map((item) => (
      <motion.a
      href={`#${item.link}`}
      key={item.link}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      >
        {item.label}
      </motion.a>
      ))}

    </motion.div>
  )
}

export default Links