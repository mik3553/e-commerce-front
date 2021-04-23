import React, {useEffect, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './header.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import {userAccount} from "../../repository/user";

// create ref for css burger and nav open (mobile device)
let burgerRef      = React.createRef();
let burgerRefTwo   = React.createRef();
let burgerRefThree = React.createRef();
let wrapperRef     = React.createRef()

const handleClick = () =>{

  let wrapper     = wrapperRef.current;
  let burger      = burgerRef.current;
  let burgerTwo   = burgerRefTwo.current;
  let burgerThree = burgerRefThree.current;

  wrapper.classList.toggle('nav-bar-open');
  burger.classList.toggle('change');
  burgerTwo.classList.toggle('change');
  burgerThree.classList.toggle('change');
}


const Header = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    if(localStorage.getItem('token') !== null){
      userAccount().then(res => {
        if(res.status !== 200) {
          localStorage.removeItem('token');
        }else{
          res.json().then(res => {
            setUser(res);
          })
        }
      })
    }
  },[user, localStorage.getItem('token')])

  const onLogOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  }

  return (
    <>
    <header>

      <div className='logo'  style={{marginLeft:'10px'}}>
        <Link to='/'><h1>E-commerce</h1></Link>
      </div>

      <div style={{display:'flex', justifyContent:'space-between', alignContent:'center', alignItems:'center'}}>
        {
          localStorage.getItem('token') && user ?  <div className='logo-user' style={{marginRight:'10px'}}>
            <Link className='nav-bar-link'  to={{
              pathname: "/mon-compte"
            }}><FontAwesomeIcon icon={faUser} className="myAccount" title='Mon compte' /></Link>
            <p style={{color:'white'}}>{user.firstName}</p>
          </div>  : null
        }
        <div className='burger-menu' onClick={handleClick}>
          <div ref={burgerRef} className='burger1'> </div>
          <div ref={burgerRefTwo} className='burger2'> </div>
          <div ref={burgerRefThree} className='burger3'> </div>
        </div>
      </div>

    </header>
    <nav ref={wrapperRef} className='nav-bar' >
      <ul className='nav-bar-list'>
        {
          user &&  <li onClick={() => onLogOut()} >
            <Link className='nav-bar-link' to='/'><FontAwesomeIcon icon={faSignInAlt} className='fontAwsome' />Déconnection</Link>
          </li>
        }
        {
          !user && <li>
            <Link className='nav-bar-link' to='/login'><FontAwesomeIcon icon={faSignInAlt} className='fontAwsome' />Connection</Link>
          </li>
        }
        {
          !user && <li>
            <Link className='nav-bar-link'  to='/inscription'>S'inscrire</Link>
          </li>
        }

      </ul>
    </nav>
    </>
  )
}

export default Header;









// const onScreen = () => {
//   // let position =window.pageYOffset || document.documentElement.scrollTop;
//   const screen = wrapperRef.current;

//   if(window.screenY > 0){
//       screen.classList.add('zindex');
//   }

// }

// useEffect(() => {
//   const screen = wrapperRef.current;
//   // console.log('screen',screen.style.top)
//   if(screen.style.top > 100){
//       screen.classList.add('zindex');
//   }
// })
// console.log(window.sessionStorage.token)


