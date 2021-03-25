import ItemPreview from '../ItemPreview/ItemPreview';
import './ItemList.scss';

export default function ItemList({ items }) {
  return (
    <div className="itemlist-container">
           <div className="cards">
      {items.map((item) => (
        <ItemPreview item={item} />
      ))}
      </div>
    </div>
  );
}
