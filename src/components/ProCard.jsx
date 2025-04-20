
import "./ProCard.scss";

function ProCard({ data }) {
  const { title, image, language } = data;
  return (
    <div className="cardContainer">
      <img src={image} alt="" className="CardImg" />
      <span>{title}</span>
      <div>{language}</div>
    </div>
  );
}
export default ProCard;

