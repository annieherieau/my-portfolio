import { CardImg } from "react-bootstrap";

export default function CardCover(props) {
  const imgData = props.imgData;
  console.log(props);

  if (props.imgData){
    return(
      <CardImg variant="left"  src="" />
    )
  }
  
}
