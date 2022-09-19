import React from 'react'
import telefoneFooter from "../../../images/phone.svg";
import "./Footer.css"

const Footer = () => {
  return (
    <footer  id="footer">
        <div className="leftFooter">
            <h4>Ecommerce Fetech Informatica Teste</h4>
            <p>Teste Paragrafo</p>
            <img src={telefoneFooter} alt="telefoneFooter"/>
        </div>

        <div className="midFooter">
            <h1>Teste</h1>
            <p>Teste Paragrafo</p>
            <p>Teste Paragrafo</p>
        </div>

        <div className="rightFooter">
            <h4>Teste</h4>
            <a href="http://instagram.com">Teste</a>
            <a href="http://instagram.com">Teste</a>
            <a href="http://instagram.com">Teste</a>
        </div>
    </footer>
  )
}
export default Footer;