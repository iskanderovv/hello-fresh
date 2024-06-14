import React from 'react';
import logo from '../../images/logo.svg';
import { LoginButton } from '../style';

const Nav = () => {
    return (
        <nav className='px-4 h-[56px] flex gap-8 items-center font-sourceSans'>
            <a href="#" className='lg:flex-none flex-1 md:flex-1 sm:flex-1'>
                <img src={logo} alt="logo" />
            </a>
            <ul className='lg:flex md:hidden sm:hidden hidden flex-1 gap-7 font-semibold color-[#242424] text-base'>
                <li><a href="#">Our Plans</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Our Menus <i class="bi bi-chevron-down"></i></a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Sustainability <i class="bi bi-chevron-down"></i></a></li>
                <li><a href="#">Thanksgiving Box</a></li>
            </ul>
            <LoginButton>Login</LoginButton>
        </nav>
    )
}

export default Nav
