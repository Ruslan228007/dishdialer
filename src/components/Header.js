import React, { Component } from 'react'
import logo from './../img/DishDialer.png'
import './../css/header.css'
import Button from './Button'
export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className='container'>
                        <div className='head'>
                            <img src={logo} className='logo'/>
                            <ul>
                                <NavBtn link='/' content='Главная'/>
                                <NavBtn link='/cooks' content='Повара'/>
                                <NavBtn link='#' content='Условия'/>
                            </ul>
                            <div className='sign'>
                                <Button link='#' variant='bright' content='Вход'/>
                                <Button link='#'  content='Регистрация'/>
                            </div> 
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

function NavBtn({ content, link }) { 
    return ( 
        <li><a className="NavBtn" href={link}>{content}</a></li> 
    ) 
}