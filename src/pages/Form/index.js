import React, { createContext, useState } from "react";
import './styleForm.css';
import Switch from "react-switch";


import sun from '../../assets/sun-solid-24.png'
import moon from '../../assets/moon-solid-24.png'
import reactLogo from '../../assets/bxl-react.svg'
import Footer from "../../components/Footer";

export const ThemeContext = createContext(null)

const Login = () =>{
    const [theme, setTheme] = useState("light")

    const toggleTheme = () =>{
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
        
    }

    function alertar(){
        return(
            alert("Formulário enviado!")
        )
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="containerMain" id={theme}>
                <div className="container">
                    <div className="containerLeft">
                        <h1>Welcome!</h1>
                        <img src={reactLogo} alt="LogoReact"/>
                    </div>
                    <div className="containerRight">
                        <div className="containerHeader">
                            <div className="containerToggle">
                                <img src={sun} alt="Sun"/>
                                <Switch 
                                    onColor="#692385"
                                    onChange={toggleTheme}
                                    checked={theme === "dark"}
                                    uncheckedIcon=''
                                    checkedIcon=''
                                />
                                <img src={moon} alt="Moon"/>
                            </div>
                        </div>
                        <div className="title">
                            <h2>Formulário de Desenvolvedor</h2>
                        </div>
                        <div className="containerForm">
                            <form className="Form">
                                <div>
                                    <input placeholder="Nome" type='text'/>
                                    <input placeholder="Sobrenome" type='text'/>
                                </div>
                                <div >
                                    <div className="time">
                                        <label>Data de Nascimento</label>
                                        <input id="date" type='date'/>
                                    </div>
                                    <div className="time">
                                        <label>Há quanto tempo é Desenvolvedor?</label>
                                        <input id="date" type='month'/>
                                    </div>
                                </div>
                                <div> 
                                    <label>Qual tipo de linguagem você melhor trabalha?</label>
                                    <div><input type='checkbox'/><label> Front-End</label></div>
                                    <div><input type='checkbox'/><label> Back-End</label></div>
                                    <div><input type='checkbox'/><label> Database</label></div>
                                </div>
                                <label>Fale um pouco sobre você</label>
                                <textarea />
                            </form>
                        </div>
                        <button id="button" placeholder="Entrar" onClick={alertar}>
                            Enviar
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
            
        </ThemeContext.Provider>
    )
}

export default Login;