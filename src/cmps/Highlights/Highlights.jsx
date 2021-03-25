import './Highlights.scss';
import line from '../../assets/img/patterns/pattern-divide.svg';
import ItemList from '../ItemList/ItemList';
import ImgItem1 from '../../assets/img/homepage/menu-items/menu-item1.jpg'
import ImgItem2 from '../../assets/img/homepage/menu-items/menu-item2.jpg'
import ImgItem3 from '../../assets/img/homepage/menu-items/menu-item3.jpg'
export default function Highlights() {
  const items = [
    {
      title: 'Seared Salmon Fillet',
      desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
      imgUrl: ImgItem1
    },
    {
      title: 'Rosemary Filet Mignon',
      desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
      imgUrl: ImgItem2
    },
    {
      title: 'Summer Fruit Chocolate Mousse',
      desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
      imgUrl: ImgItem3
    },
  ]

  return (
    <div className="highlights-container">
      <div className="highlights-content container">
        <div className="side-text">
          <div className="side-line">
          <img src={line} alt="" srcset="" />

          </div>
          <div className="side-title">A few highlights from our menu</div>
          <div className="side-desc">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </div>
        </div>
        <div className="text"></div>

      <ItemList items={items} />

        {/* <div className="cards">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-text">
              <div className="card-title">Seared Salmon Fillet</div>
              <div className="card-desc">
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
