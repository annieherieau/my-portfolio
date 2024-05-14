import { CardImg } from "react-bootstrap";

export default function CardCover(props) {
  const imgData = props.imgData.attributes;
  const src = `src/assets/works/${imgData.name}`;
  if (props.imgData) {
    return (
      <div className="CardCover">
        <CardImg className="w-100" variant="left" src={src} />
      </div>
    );
  }
}
