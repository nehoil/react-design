import './ItemPreview.scss';

export default function ItemPreview({ item }) {
  return (
    <div className="itempreview-container">
      <div className="card">
        <div className="card-img">
          <img src={item.imgUrl} alt="" srcset="" />
          <div className="line"></div>
        </div>
        <div className="card-text">
          <div className="card-title">{item.title}</div>
          <div className="card-desc">{item.desc}</div>
        </div>
      </div>
    </div>
  );
}
