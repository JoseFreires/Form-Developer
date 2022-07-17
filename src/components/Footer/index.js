import React from "react";
import './styleFooter.css'

import github from '../../assets/logo-github.png'

export default function Footer(){
    return(
        <div className="containerFooter">
            <p>Feito pelo José Freires</p>
            <a href="https://github.com/JoseFreires" target='blank'>
                <img src={github} alt="Logo Github" id="githubImage" />
            </a>
        </div>
    )
}