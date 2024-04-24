import React from 'react'
import Styles from './Style.module.css'
import StyleItems from './StylesItems/StyleItems'
import { useGlobalContext } from '../../../../context/globalContext'

function Style() {
    const {fiveStylesItems} = useGlobalContext();
  return (
    <div className={Styles.styleContainer}>
        <h2>Create Your Style</h2>
        <div className={Styles.styleItems}>
          {fiveStylesItems.map((item:any, index:number) => (
                <StyleItems key={index} item={item} />
            ))}
        </div>
    </div>
  )
}

export default Style