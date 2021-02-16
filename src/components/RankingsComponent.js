import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderRankingsItem({ jerky }) {
  return (
    <Card className="rankcard">
      <CardBody>
        <div className="row">
          <div className="col-md">
            <CardImg className="img-fluid" src={jerky.image} alt={jerky.name} />
          </div>
          <div className="col-md">
            <CardImg className="img-fluid" src={jerky.textureimage} alt={jerky.name} />
          </div>
        </div>
        <CardTitle>
          <h3>{jerky.name}</h3>
        </CardTitle>
        <CardText className="rankcardtext">
          <ul>
            <li>
              <strong>Rank: #{jerky.rank}</strong>
            </li>
            <li>
              <strong>Taste: </strong>
              {jerky.taste} out of 10
            </li>
            <li>
              <strong>Texture: </strong>
              {jerky.texture} out of 10
            </li>
            <li>
              <strong>Chew:</strong> {jerky.chew} out of 10
            </li>
            <li>
              <strong>Score: </strong>
              {jerky.total} out of 30
            </li>
            <li>
              <strong>Flavor: </strong>
              {jerky.flavor}
            </li>
            <li>
              <strong>Construction: </strong>
              {jerky.construction}
            </li>
            <li>
              <strong>Notes:</strong> {jerky.notes}
            </li>
          </ul>
        </CardText>
      </CardBody>
    </Card>
  );
}

function Rankings(props) {
  const rankings = props.jerkys.map((jerky) => {
    return (
      <div key={jerky.id} className="col-md-12 m-3">
        <RenderRankingsItem jerky={jerky} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Rankings</h1>
        </div>
      </div>
      <div className="row">{rankings}</div>
      <hr />
    </div>
  );
}

export default Rankings;
