import logo from './img/image.png'
import css from './css/home.css'

function Nav(){
return(
    <>
    <div className="menu">
        <img className='logo_img' src={logo}></img>
        <h className="app_name">Room Chat</h>
    </div>
    </>
);
}

export default Nav;