import React, {useState} from 'react'
import logo from '../../assets/images/logo.svg'
import menu from '../../assets/images/icon-menu.svg'
import todo from '../../assets/images/icon-todo.svg'
import calendar from '../../assets/images/icon-calendar.svg'
import planning from '../../assets/images/icon-planning.svg'
import reminders from '../../assets/images/icon-reminders.svg'
import down from '../../assets/images/icon-arrow-down.svg'
import up from '../../assets/images/icon-arrow-up.svg'
import close from '../../assets/images/icon-close-menu.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [toggletwo, setToggletwo] = useState(false)
    // const [toggleMenu, setToggleMenu] = useState(false)

    const handleClickOpen = () => {
        const menu = document.querySelector('.dropdown')
        menu.style.right = "0";
    }
    const handleClickClose = () => {
        const menu = document.querySelector('.dropdown')
        menu.style.right = "-50%";
    }

    return (
        <div className='flexnav'>
            <Link to='/' className='logo'><img src={logo} alt="snap logo" /></Link>
            <div className="dropdown">
                <img src={close} alt="close bar icon" className='close' onClick={handleClickClose} />
                <div className="dropchildren features" onClick={() => {
                setToggletwo(false)
                setToggle((prevToggle) => !prevToggle)
                }}>
                    Features <img src={!toggle ? down : up} alt="arrow icon" />
                </div>
                { toggle && <div className="white">
                    <div className="wchild">
                        <img src={todo} alt="" className='items' /> Todolist
                    </div>
                    <div className="wchild">
                        <img src={calendar} alt="" className='items' /> Calendar
                    </div>
                    <div className="wchild">
                        <img src={reminders} alt="" className='items' /> Reminders
                    </div>
                    <div className="wchild">
                        <img src={planning} alt="" className='items' /> Planning
                    </div>
                </div> }
                <div className="dropchildren company" onClick={() => {
                setToggle(false)
                setToggletwo((prevToggletwo) => !prevToggletwo)
                }}>
                    Company <img src={!toggletwo ? down : up} alt="arrow icon" />
                </div>
                { toggletwo && <div className="white2">
                    <div className="wchild2">
                        History
                    </div>
                    <div className="wchild2">
                        Our Team
                    </div>
                    <div className="wchild2">
                        Blog
                    </div>
                </div> }
                <div className="dropchildren">
                    Careers
                </div>
                <div className="dropchildren about">
                    About
                </div>
            </div>
            <div className='login'>Login</div>
            <div className='register'>Register</div>
            <img src={menu} alt="menu bar icon" className='menu' onClick={handleClickOpen} />
        </div>
    )
}

export default Navbar;