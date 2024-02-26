import Row from "../../UI/Row/Row";
import Styles from "./Home.module.css";

function Home() {
  return (
    <section className={Styles.container}>
      <Row>
        <h1>Welcome to our store</h1>
      </Row>
    </section>
  );
}

export default Home;
