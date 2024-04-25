import React from 'react'
import Styles from './StyleItems.module.css'
import { Link } from 'react-router-dom'
import StarsBar from '../../../../UI/StarsBar/StarsBar'
import favIconOutline from "../../../../../assets/icons/heart-outline.svg";
import addIcon from "./../../../../../assets/icons/add-outline.svg";

function StyleItems({item}: any) {
  return (
    <div className={Styles.itemContainer}>
      <Link to="#">
        <div className={Styles.itemContainer__action}>
          <button>
            <img src={favIconOutline} alt="" />
          </button>
          <button>
            <img src={addIcon} alt="" />
          </button>
        </div>

        <div className={Styles.itemContainer__tag}>        
            {item.new === true ?  <span className={Styles.tagNew}>New</span> : null}         
        </div>

        <div className={Styles.itemContainer__colors}>
          <span className={Styles.colors__block} style={{ backgroundColor: "#edae00" }}></span>
          <span className={Styles.colors__block} style={{ backgroundColor: "#00deb0" }}></span>
          <span className={Styles.colors__block} style={{ backgroundColor: "#fa5838" }}></span>
        </div>

        <div className={Styles.itemContainer_header}>
          <img src={`/src/assets/image/${item.images[0]}`} alt={item.title} />
        </div>

        <div className={Styles.itemContainer__footer}>
          <h2>{item.title}</h2>
          {/* <p>QMK/VIA Wireless Custom Mechanical Keyboard</p> */}
          <StarsBar rate_average={item.rate_average}/>
          <span>${item.price}</span>
        </div>

      </Link>
    </div>
  )
}

export default StyleItems