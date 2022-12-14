import React,{useState} from 'react';
import logo from '../../assets/img/deezi1.png';
import './navbar.scss';
import {HiOutlineMenu} from 'react-icons/hi';
import {CiCircleRemove} from 'react-icons/ci';



const Menu = () => (
    <>
    <a href='#'><p>Home</p></a>
                <a href='#about'><p>About</p></a>
                <a href='#AI'><p>AI</p></a>
                <a href='#machine'><p>Machine Learning</p></a>
                <a href='#blog'><p>Blog</p></a>
                
    </>
)

const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(false)

  return (
    <div className='deezi_navbar'>
            <div className='logo'>
                    <img src={logo} alt='deezi' />
            </div>
        <div className='links'>
        
            <div className='navbar'>
                
                <Menu/>
              
            </div>
            <div className='action'>
            <p>Sign In</p>
                <button type='button'>
                    <p>Sign Up</p>
                </button>
            </div>
            <div className='menubar'>
               
                {toggleMenu?
                <CiCircleRemove fontSize={50} onClick={() => setToggleMenu(false)} />
                :
                <HiOutlineMenu  fontSize={50} onClick={() => setToggleMenu(true)} />
}
                {toggleMenu && (
                     <div className='wrapper'>
              <div className='container scaleup-center'>
 
              <Menu/>
              <div className='action'>
              <p>Sign In</p>
                <button type='button'>
                    <p>Sign Up</p>
                </button>
            </div>
                  </div>
                  </div>
            )
}
 </div>
           
           
            </div>  
  </div>
  )
}

export default Navbar