import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <h1>
            Vegan jerky can be the most amazing carniverous simulating snack .
          </h1>
          <p>
            That amazing texture, chew, spice and satisfaction you remember from
            your cheeseburger slaying meat eating days.
          </p>
          <h1>It can also execute your tastebuds if you grab the wrong bag.</h1>
          <p>
            Like biting in to a banana peel marinated in broccoli and gym socks.
          </p>
          <h1>
            We're here to keep you from snapping in to a bad vegan jerky trip.
          </h1>
          <hr />
          <h2>How's it work?</h2>
          <p>Simple, we buy vegan jerky and taste it, then report back.</p>
          <h2>The Categories:</h2>
          <ul>
            <li>
              <strong>Taste:</strong> Like, how good it tastes on a scale of
              1-10.
            </li>
            <li>
              <strong>Texture:</strong> Mouth feel, is it jerky, fruit rollup or
              tofu feeeling?
            </li>
            <li>
              <strong>Chew:</strong> One of the most important factors in vegan
              jerky. Does it have a long lasting traditional chew or does it
              dissolve on contact like a vodka soaked gummy bear?
            </li>
            <li>
              <strong>Construction:</strong> What's it based on..Ie: Soy,
              Seitan, Fruit, etc..
            </li>
            <li>
              <strong>Notes:</strong> A brief description of the experience and
              any important factors for your consideration.
            </li>
          </ul>
          <hr />
          <h1>Top 3 current pound for pound ranking:</h1>
          <div className="row">
        <div className="col-md m-1">
          <RenderCard item={props.combatant} />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.combatant} />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.combatant} />
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
