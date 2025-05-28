import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.png";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="base-card home-content-container">
          <div className="home-content-image-container">
            <img src={banner} alt="" />
          </div>
          <div className="home-content-button-container">
            <Link to={"/admin"}>
              <button>ENTRAR</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
