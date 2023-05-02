import React, { Component } from 'react'
import big from './../img/big.png'
import tiny from './../img/tiny.png'
import './../css/dishes.css'
export default class Dishes extends Component {
    render() {
        return (
            <div className='dishes'>
                <div className='tiny1'>
                    <img src={tiny} className='tiny'/>
                    <div className='big1'>
                        <img src={big} className='big'/>
                    </div>
                </div>
            </div>
        )
    }
}
