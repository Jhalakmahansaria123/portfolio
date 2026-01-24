import Sidebar from '../sidebar/Sidebar.jsx'
import "./navbar.scss"
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale:0.5}}
             animate={{opacity:1, scale:1}} 
             transition={{duration:1}}>Jhalak Mahansaria</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/jhalak-mahansaria-195801296/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Jhalakmahansaria123"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.instagram.com/jhalak_mahansaria/"><i class="fa-brands fa-instagram"></i></a>
                
                </div>
        </div>

    </div>
  )
}

export default Navbar