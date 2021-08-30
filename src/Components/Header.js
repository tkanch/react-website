import React from 'react';
import { Link } from'react-router-dom';


const Header = ({title,btnName,visit,imgSrc}) => {
    return (
        <header>
            <section className="text">
                <h1>{title}<strong>Tech Services</strong></h1>
                <h2>We are team of talented developers</h2>
                <Link to={visit}>
                <button>{btnName}</button>
                </Link>
                
            </section>
            <section className="image">
                <img src={imgSrc} alt="" />
            </section>
        </header>
    )
}

export default Header
