import useMetaDataUpdater from "../../../hooks/useMetaDataUpdater";
import Accessories from "./Accessories/Accessories";
import Styles from "./Home.module.css";
import InStockKeyboards from "./Keyboards/InStockKeyboards";
import MediaContainer from "./MediaContainer/MediaContainer";
import SwiperContainer from "./SwiperContainer/SwiperContainer";
import Style from "./YourStyle/Style";

function Home() {
  useMetaDataUpdater("Home page");
  return (
    <section className={Styles.container}>
      <div className={Styles.homeContainer}>
        <div className={Styles.swiperContainer}>
          <SwiperContainer />
        </div>
        <div className={Styles.inStockContainer}>
          <InStockKeyboards />
        </div>
        <div className={Styles.styleContainer}>
          <Style />
        </div>
        <div className={Styles.accessoriesContainer}>
          <Accessories />
        </div>
        <div className={Styles.mediaContainer}>
          <div className={Styles.title}>
            <h2>We are on Media</h2>
          </div>
          <div className={Styles.iconsContainer}>
            <MediaContainer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
