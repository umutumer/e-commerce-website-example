import { BiSolidTruck, BiHappyBeaming } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import background from "./banner.jpg";
import "./Home.css";
import ProductContent from "../ProductContent/ProductContent";
const Home = ({data}) => {

  return (
    <div>
      <div
        className="home-picture"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h3>Lorem, ipsum.</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="home-icons">
        <div className="home-icon-div">
          <BiSolidTruck className="home-icon" />
          <h3>Fast Delivery</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="home-icon-div">
          <RiSecurePaymentFill className="home-icon" />
          <h3>Secure Payment</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="home-icon-div">
          <BiHappyBeaming className="home-icon" />
          <h3>Happy Customer</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="home-product-container">
        <ProductContent data={data} />
      </div>
    </div>
  );
};

export default Home;
