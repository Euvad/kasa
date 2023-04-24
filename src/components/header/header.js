import React from 'react'
import Logo from "../../assets/logo.png";
import Navbar from '../navbar/navbar';
import "./header.scss";

function Header() {
	return (
		<header className='header'>
			<div className='header_box'>
					<img src={Logo} alt="kasa, location d'appartements" />
				<Navbar />
			</div>
		</header>
	)
}

export default Header
