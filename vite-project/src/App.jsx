import { useState } from 'react'
import './App.scss'
import Form from './Components/form/Form'

import imgBurger from '../src/assets/Rectangle1.png'
import imgPotato from '../src/assets/Rectangle3.png'
import imgHotDog from '../src/assets/Rectangle2.png'

function App() {
  const [numberOfItems, setnumberOfItems] = useState(0)

  const arr= [
    {
      img: imgBurger,
      context: 'Супер сырный', 
      weight: '512г',
      cost: '550₽',
      class: 'firstPusch',
      confCost: '550',
      id: 'firstPusch',
    },
    {
      img: imgPotato,
      context: 'Картошка фри', 
      weight: '180г',
      cost: '245₽',
      class: 'secondPusch',
      confCost: '245',
      id: 'secondPusch',
    },
    {
      img: imgHotDog,
      context: 'Жгучий хот-дог', 
      weight: '245г',
      cost: '239₽',
      class: 'thirdPusch',
      confCost: '239',
      id: 'thirdPusch',
    },
  ]
  // function solveNumOfItems() {
  //   const butMinuses = document.querySelectorAll('minus')
  //   const butPluses = document.querySelectorAll('plus')
  //   const divBurger = document.querySelector('.firstPusch .number')
  //   const divPotato = document.querySelector('.secondPusch .number')
  //   const divHotDog = document.querySelector('.thirdPusch .number')

  //   butMinuses.onClick( setTimeout(() => {
  //     setnumberOfItems(divPotato.id +divBurger.id+divHotDog.id);
  //   }, 100))
  //   butPluses.onClick(setTimeout(() => {
  //     setnumberOfItems(divPotato.id +divBurger.id+divHotDog.id);
  //   }, 100))
  // }
  
  // setTimeout(() => {
  //   solveNumOfItems()
    //     const divBurger = document.querySelector('.firstPusch .number')
    // const divPotato = document.querySelector('.secondPusch .number')
    // const divHotDog = document.querySelector('.thirdPusch.number')
    // console.log(divBurger.id);

    // const divBurger2 = parseInt(divBurger.id)
    // console.log(divBurger2);
    //   const divPotato2 = parseInt(divPotato)
    //   const divHotDog2 = parseInt(divHotDog)
    //   console.log(divPotato2 +divBurger2+divHotDog2+2);
  // }, 100)

  return (
    <>
        <div className="container">
          <div className="all-sum">
            <h2>Корзина</h2>
            <div className='numberOfItems'>{numberOfItems}</div>
          </div>
          <div className="purchases">
            <Form user={arr[0]} />
            <Form user={arr[1]} />
            <Form user={arr[2]} />
          </div>
          <div className="finish">
            <h3>Итого</h3>
            <h3 className='sum-h3'></h3>
          </div>
        </div>
    </>
  )
}

export default App
