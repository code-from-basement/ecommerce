import Row from "../../UI/Row/Row";
import Styles from "./Home.module.css";
import wallpaper from "../../../assets/image/mediaIcons/wallpaper_logo_f79e68fd-777d-4d65-b794-130a0534f53d_360x.jpg"
import wired from "../../../assets/image/mediaIcons/wired_logo_cd029a23-c265-49f3-b457-22f2f9dfda27_360x.jpg"
import MediaContainer from "./MediaContainer/MediaContainer";



const icons = [
  {
    id:1,
    image: wallpaper,
  },
  // {
  //   id:2,
  //   image: wired,
  // },
  // {
  //   id:3,
  //   image: wallpaper,
  // },
  // {
  //   id:4,
  //   image: wallpaper,
  // },
  // {
  //   id:5,
  //   image: wallpaper,
  // },
  // {
  //   id:6,
  //   image: wallpaper,
  // },
  // {
  //   id:7,
  //   image: wallpaper,
  // },
  // {
  //   id:8,
  //   image: wallpaper,
  // },
]
function Home() {
  return (
    <section className={Styles.container}>
      <div className={Styles.homeContainer}>
        <div className={Styles.swiperContainer}>hi</div>
        <div className={Styles.inStockContainer}>how</div>
        <div className={Styles.styleContainer}>are</div>
        <div className={Styles.accessoriesContainer}>you</div>
        <div className={Styles.mediaContainer}>
          <div className={Styles.title}>
            <h2>We are on Media</h2>
          </div>
          <div className={Styles.iconsContainer}>
            <MediaContainer/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
