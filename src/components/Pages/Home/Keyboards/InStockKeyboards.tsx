import React from 'react'
import Styles from './InStockKeyboards.module.css'
import StockKeyboardItems from './InStockKeyboardItems/StockKeyboardItems'
import { useGlobalContext } from '../../../../context/globalContext';

function InStockKeyboards() {
  const { fiveKeyboardsItems } = useGlobalContext();
  return (
    <div className={Styles.keyboardsContainer}>
      <h2>In Stock Keyboards</h2>
        <div className={Styles.keyboardsItems}>
          {fiveKeyboardsItems.map((item:any, index:number) => (
                <StockKeyboardItems key={index} item={item} />
            ))}
        </div>
    </div>
  )
}

export default InStockKeyboards