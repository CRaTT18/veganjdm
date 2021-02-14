import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderRankingsItem({ jerky }) {
  return (
    <Card>
      <CardBody>
        <CardImg width="100%" src={jerky.image} alt={jerky.name} />
        <CardTitle>
          {jerky.name}
        </CardTitle>
        <CardText>
          <ul>
            <li>Rank: #{jerky.rank}</li>
            <li>Taste: {jerky.taste} out of 10</li>
            <li>Texture: {jerky.texture} out of 10</li>
            <li>Chew: {jerky.chew} out of 10</li>
            <li>Score: {jerky.total} out of 30</li>
            <li>Flavor: {jerky.flavor}</li>
            <li>Construction: {jerky.construction}</li>
            <li>Notes: {jerky.notes}</li>
          </ul>
        </CardText>
      </CardBody>
    </Card>
  );
}

function Rankings(props) {
  const rankings = props.jerkys.map((jerky) => {
    return (
      <div key={jerky.id} className="col-md-5 m-1">
        <RenderRankingsItem jerky={jerky} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Rankings</h1>
          <hr />
        </div>
      </div>
      <div className="row">{rankings}</div>
    </div>
  );
}

export default Rankings;
