import React from 'react'
import Styles from './Accessories.module.css'
import ItemAccessories from './ItemAccessories/ItemAccessories'

function Accessories() {
  return (
    <div className={Styles.accessoriesContainer}>
        <h2>Accessories</h2>
        <div className={Styles.accessoriesItems}>
            <ItemAccessories/>     
        </div>
    </div>
  )
}

export default Accessories