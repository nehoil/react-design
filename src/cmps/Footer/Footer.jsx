import './Footer.scss';
import logoImg from '../../assets/img/logo.svg';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content container">
        <div className="logo">
          <img src={logoImg} alt="" srcset="" />
        </div>

        <div className="phone-address">
          <div className="address">MARTHWAITE, SEDBERGH CUMBRIA</div>
          <div className="phone">+00 44 123 4567</div>
        </div>

        <div className="open-times">
          <div className="title">OPEN TIMES</div>
          <div className="time">MON - FRI: 09:00 AM - 10:00 PM</div>
          <div className="time">SAT - SUN: 09:00 AM - 11:30 PM</div>
        </div>
      </div>
    </div>
  );
}
