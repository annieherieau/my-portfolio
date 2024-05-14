import { CardImg } from "react-bootstrap";

export default function CardCover(props) {
  const imgData = props.imgData.attributes;
  const src =`src/assets/works/${imgData.name}`
  console.log(imgData);
  if (props.imgData){
    return(
      <CardImg className='CardCover' variant="left"  src={src} />
    )
  }
  
}
