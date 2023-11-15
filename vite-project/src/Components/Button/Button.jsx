import './Button.scss'
import { useState } from 'react'

export default function Button() {

  const [numBurg,setnumBurg] = useState(0);

  function minusOne() {
    if (numBurg > 0) {
      setnumBurg(numBurg-1)
    }else{
      return
    }
  }

  function plusOne() {
    setnumBurg(numBurg+1)
  }

    return (
        <>
          <div className="button">
            <div onClick={minusOne} className="minus">-</div>
            <div id={numBurg} className="number">{numBurg}</div>
            <div onClick={plusOne} className="plus">+</div>
          </div>
        </>
    )
}