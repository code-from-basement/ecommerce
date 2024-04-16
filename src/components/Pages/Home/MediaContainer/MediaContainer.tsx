import React from 'react'
import Styles from './MediaContainer.module.css'
import wallpaper from "../../../../assets/image/mediaIcons/wallpaper_logo_f79e68fd-777d-4d65-b794-130a0534f53d_360x.jpg"
import wired from "../../../../assets/image/mediaIcons/wired_logo_cd029a23-c265-49f3-b457-22f2f9dfda27_360x.jpg";
import hyp from "../../../../assets/image/mediaIcons/hypebeast_logo_cf4be27e-8e2c-40e0-a6a0-732dd9e063f6_360x.jpg";
import milk from "../../../../assets/image/mediaIcons/designmilk_logo_d658a626-e535-452c-8428-736a6a54068a_360x.jpg";
import net from "../../../../assets/image/mediaIcons/cnet_logo_ae444a90-8096-4072-862d-2ba81e0e2e60_360x.jpg";
import forbes from "../../../../assets/image/mediaIcons/forbes_logo_1e7a4dd4-96b8-49d7-a05d-d55b3d2211c0_360x.jpg";
import time from "../../../../assets/image/mediaIcons/nytimes_logo_0f1a9b06-a5b7-4c00-8512-206cd22bb4db_360x.jpg";
import short from "../../../../assets/image/mediaIcons/shortcircuit_logo_edbf9e60-7f39-4ee7-8969-756b57746fc3_360x.jpg";
import the from "../../../../assets/image/mediaIcons/theverge_logo_e2c8465a-a186-46d3-8f91-b2d9ba82cdb2_360x.jpg";
import engodget from "../../../../assets/image/mediaIcons/engadget_logo_e3994487-8379-4e34-8a5d-b666cdd7f40a_360x.jpg";
import mac from "../../../../assets/image/mediaIcons/9to5mac_logo_360x.jpg";
import apple from "../../../../assets/image/mediaIcons/appleinsider_logo_9fde8270-d362-41ae-b718-a4ad9c2a85aa_360x.jpg";

function MediaContainer() {

    const icons = [
        {
          id:1,
          image: wallpaper,
        },
        {
          id:2,
          image: wired,
        },
        {
          id:3,
          image: hyp,
        },
        {
          id:4,
          image: milk,
        },
        {
          id:5,
          image: net,
        },
        {
          id:6,
          image: forbes,
        },
        {
          id:7,
          image: time,
        },
        {
          id:8,
          image: the,
        },
        {
            id:9,
            image: short,
          },
          {
            id:10,
            image: engodget,
          },
          {
            id:11,
            image: mac,
          },
          {
            id:12,
            image: apple,
          },
      ]

  return (
    <div className={Styles.mainContainer}>

            {icons.map((icon) => (
                <div key={icon.id}>
                    <img src={icon.image} alt="icon" className={Styles.iconContainer}/>
                </div>
            ))}

    </div>
  )
}

export default MediaContainer