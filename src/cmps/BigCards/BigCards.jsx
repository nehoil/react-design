import './BigCards.scss';
import cardImage1 from '../../assets/img/homepage/enjoyable-place-desktop.jpg';
import cardImage2 from '../../assets/img/homepage/locally-sourced-desktop.jpg';
import line from '../../assets/img/patterns/pattern-divide.svg';
import brownLines from '../../assets/img/patterns/pattern-lines.svg';
import patternCurve from '../../assets/img/patterns/pattern-curve-top-right.svg';
export default function BigCards() {
  return (
    <div className="bigcards-container container">
      <div className="cards">
        <div className="card">
          <div className="img">
            <img src={cardImage1} alt="" srcset="" />
          </div>
          <div className="text">
            <div className="line">
              <img src={line} alt="" srcset="" />
            </div>
            <div className="title">Enjoyable place for all the family</div>
            <div className="desc">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </div>
          </div>
          <div className="pattern-curve">
            <img src={patternCurve} alt="" srcset="" />
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={cardImage2} alt="" srcset="" />
          </div>
          <div className="text">
            <div className="line">
              <img src={line} alt="" srcset="" />
            </div>
            <div className="title">The most locally sourced food</div>
            <div className="desc">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </div>
          </div>
          <div className="brown-lines">
            <img src={brownLines} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
