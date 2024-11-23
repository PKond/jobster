import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            rerum, voluptas temporibus doloremque, vero doloribus in veritatis,
            cum similique voluptates nam atque alias. Totam asperiores inventore
            adipisci odit maxime quod! Vel, deserunt recusandae minima nostrum
            neque sequi, soluta molestiae cumque iusto dicta, temporibus
            cupiditate ad ipsam perspiciatis blanditiis nam maxime nobis
            expedita? Necessitatibus error voluptates quia commodi rem similique
            quibusdam!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
