import React, { Component } from 'react'
import Dishes from './../components/Dishes'
import './../css/home.css'
import Button from './../components/Button'
import n1 from './../img/1.png'
import n2 from './../img/2.png'
import n3 from './../img/3.png'
import 'animate.css'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Dishes />
        <div>
          <div className='maintext'>
            <div className='container'>
              <h1>Еда всегда и везде</h1>
              <p>Заказывайте еду через наш сервис размещения поварских услуг и продажи  домашней еды</p>
              <div>
                <Button link='#reasons' variant='negr' content='Подробнее' />
              </div>
            </div>
          </div>

          <div className='reas' id='reasons'>
            <div className='container'>
              <h1>Почему мы?</h1>
              <div className='margin0'>
                <div className='fact'>
                  <img src={n1} className='n1' alt='' />
                  <div className='gap'>
                    <h2>Зарабатывайте легко на своём любимом деле</h2>
                    <p>В нашем сервисе вы можете продавать домашнюю еду собственного приготовления </p>
                  </div>
                </div>
              </div>
              <div className='margin1'>
                <div className='fact'>
                  <img src={n2} className='n1' alt='' />
                  <div className='gap'>
                    <h2>Вы сами договариваетесь с покупателями</h2>
                    <p>Вы назначаете свою цену и обговариваете различные аспекты работы </p>
                  </div>
                </div>
              </div>
              <div className='margin2'>
                <div className='fact'>
                  <img src={n3} className='n1' alt='' />
                  <div className='gap'>
                    <h2>Быстрое оформление заказов</h2>
                    <p>Мы поможем вам без лишних трудностей найти покупателей и получить оплату.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
