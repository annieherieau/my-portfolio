import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import CardCover from "./CardCover";

export default function WorkCard(props) {
  const { title, description, date, cover } = props.workdata;
  let image;

  if (cover.data){
    console.log()
  }
  
  

  console.log(props.workdata.cover);
  return (
    <Card>
      <div className="row g-0">
        <div className="col-md-4">
          <CardCover imgData={cover.data} />
          <CardImg src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <CardBody className="card-body">
            <CardTitle className="card-title">{title}</CardTitle>
            <CardText className="card-text">{description}</CardText>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </CardBody>
        </div>
      </div>
    </Card>
  );
}
