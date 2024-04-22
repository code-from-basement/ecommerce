import React, { useEffect } from 'react'
import Styles from './Accessories.module.css'
import ItemAccessories from './ItemAccessories/ItemAccessories'

function Accessories() {
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://127.0.0.1:5555/api/products/accessories')
      const data = await response.json()
      console.log(data)
    }
    fetchItems();
  }, [])
  return (
    <div className={Styles.accessoriesContainer}>
        <h2>Accessories</h2>
        <div className={Styles.accessoriesItems}>
            {/* <ItemAccessories/>      */}
            
        </div>
    </div>
  )
}

export default Accessories