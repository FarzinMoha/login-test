import BoxTitle from "../../components/box-title/BoxTitle";
import Box from "../../components/box/Box";
import Button from "../../components/button/Button";
import Title from "../../components/title/Title";
import { pallet } from "../../layout/pallet";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <Title>This is your beautiful test app!</Title>
        <Box className="home-box">
          <BoxTitle>
            This app let’s you change the color of the button below from green
            to red each time you click it! isnt’ that amazing?
          </BoxTitle>
          <Button addClass="home-btn" width={350} color={pallet.green}>Change the color of this button now</Button>
        </Box>
        <Button addClass="home-btn-logout" width={105} color={pallet.green}>Log-out</Button>
      </div>
    </section>
  );
};

export default Home;
