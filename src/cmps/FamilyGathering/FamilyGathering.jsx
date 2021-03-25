import './FamilyGathering.scss';

import img from '../../assets/img/homepage/family-gathering-desktop.jpg';
export default function FamilyGathering() {
  return (
    <div className="familygathering-container">
      <div className="img">
        <img src={img} alt="" srcSet="" />
      </div>

      <div className="text">
        <div className="top-text">
          <div className="title">Family Gathering</div>

          <div className="desc">
            We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            experience for all.
          </div>
          <div className="btn">BOOK A TABLE</div>
        </div>
        <div className="bottom-text">
          <ul>
            <li>FAMILY GATHERING</li>
            <li>SPECIAL EVENTS</li>
            <li>SOCIAL EVENTS</li>
          </ul>
          <div className="bottom-line"></div>
        </div>
      </div>

      <div className="brown-lines"></div>
    </div>
  );
}
