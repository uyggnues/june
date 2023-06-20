import React, { useRef } from 'react';

const Navbar = () => {
    const navRef = useRef()

    return (
        <header>
           <nav ref={navRef} className='navbar'>
                <a href='/palette'className='nav_palette'>PALETTE</a>
                <a href='/book'className='nav_book'>BOOK</a>
                <a href='/' className='logo'>LOGO</a>
                <a href='/about'className='nav_about'>ABOUT</a>
                <a href='/contact'className='nav_contact'>CONTACT</a>
            </nav>
        </header>
    );
}

export default Navbar;
