import './Header.scss';
import logoImg from "../../assets/img/logo.svg";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-content container">

      <div className="logo">
        <img src={logoImg} alt="" srcset=""/>
      </div>
      <div className="title">Exquisite dining since 1989</div>
      <div className="desc">
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </div>
      <div className="btn">BOOK A TABLE</div>
      <div className="side-bg"></div>
      </div>
    </div>
  );
}
