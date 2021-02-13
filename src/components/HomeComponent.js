import React from "react";
import { Card, CardImg, CardImgOverlay, CardDeck, CardTitle } from "reactstrap";
import louisville from "../images/louisville_header.jpg";
import primal from "../images/primal_spirit_header.jpg";
import solely from "../images/solely_header.jpg";

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <h1>Top 3 current pound for pound ranking:</h1>
          <CardDeck>
            <Card style={{ width: "20rem" }}>
              <CardImg
                width="100%"
                src={louisville}
                alt="Lousville Vegan Jerky"
              />
              <CardImgOverlay>
                <CardTitle>#1: Louisville Vegan Jerky Co.</CardTitle>
              </CardImgOverlay>
            </Card>
            <Card style={{ width: "20rem" }}>
              <CardImg
                width="100%"
                src={primal}
                alt="Primal Spirit Vegan Jerky"
              />
              <CardImgOverlay>
                <CardTitle>#2: Primal Spirit Foods Primal Strips</CardTitle>
              </CardImgOverlay>
            </Card>
            <Card style={{ width: "20rem" }}>
              <CardImg width="100%" src={solely} alt="Solely Vegan Jerky" />
              <CardImgOverlay>
                <CardTitle>#3: Solely Organic Fruit Jerky</CardTitle>
              </CardImgOverlay>
            </Card>
          </CardDeck>
          <br />
          <p>
            You can't go wrong with the top 3, any one of them is a top
            contender on any given day with taste even a carnivore can like.
          </p>
          <hr />
          <h1>
            Vegan jerky can be the most amazing carniverous simulating snack.
          </h1>
          <p>
            That classic texture, chew, spice and satisfaction you remember from
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
          <p>
            Simple, we buy vegan jerky and taste it, then report back. Click on
            the links at the top to see rankings and matches to see what happens
            when jerkys go toe to toe.
          </p>
          <h2>The Categories:</h2>
          <ul>
            <li>
              <strong>Taste:</strong> Like, how good it tastes on a scale of
              1-10.
            </li>
            <li>
              <strong>Texture:</strong> Mouth feel, is it jerky, fruit rollup or
              tofu feeling?
            </li>
            <li>
              <strong>Chew:</strong> One of the most important factors in vegan
              jerky. Does it have a long lasting traditional chew or does it
              dissolve on contact like a vodka soaked gummy bear?
            </li>
            <li>
              <strong>Construction:</strong> What's it based on? Soy, Seitan,
              Fruit, Realigned Pea Protein etc..
            </li>
            <li>
              <strong>Notes:</strong> A brief description of the experience and
              any important factors for your consideration.
            </li>
          </ul>
          <h2>What if a brand has more then one flavor?</h2>
          <p>
            Then we'll choose our favorite for the ranked jerky and list other
            notable flavors or disappointments from the same brand in the notes
            section. From my experience the big hitters don't put out bad
            flavors, they're at the top for a reason.
          </p>
          <h2>So keep it above the belt and let's get it on!</h2>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
