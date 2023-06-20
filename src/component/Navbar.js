import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef()
    const navigate = useNavigate()

    return (
        <header>
           <nav ref={navRef} className='navbar'>
                <a href='/palette'className='nav_palette'>PALETTE</a>
                <a href='/book'className='nav_book'>BOOK</a>
                <img  onClick={() => navigate('/')} href='/' className='logo' src={'https://cdn.discordapp.com/attachments/1120808152233955398/1120824968368898140/palettebyhazel_logo.png'} alt='LOGO'/>
                <a href='/about'className='nav_about'>ABOUT</a>
                <a href='/contact'className='nav_contact'>CONTACT</a>
            </nav>
        </header>
    );
}

export default Navbar;
