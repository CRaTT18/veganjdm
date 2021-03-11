import React from "react";
import { Card, CardImg, CardImgOverlay, CardDeck, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import louisville from "../images/louisville_header.jpg";
import primal from "../images/primal_spirit_header.jpg";
import primal_texture from "../images/primal_spirit_texture.jpg";
import solely from "../images/solely_header.jpg";
import foreal from "../images/foreal_header.jpg";
import sweet_earth from "../images/sweet_earth_header.jpg";
import louisvilletexture from "../images/louisville_texture.jpg";
import solelytexture from "../images/solely_texture.jpg";
import forealtexture from "../images/foreal_texture.jpg";
import sweet_earth_texture from "../images/sweet_earth_texture.jpg";
import farwest from "../images/farwestfungi_header.jpg";
import farwest_texture from "../images/farwestfungi_texture.jpg";
import perky from "../images/perkyjerky_header.jpg";
import perky_texture from "../images/perkyjerky_texture.jpg";

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col m-1">
          <h1>Top 3 current pound for pound rankings:</h1>
          <Link to="/rankings">
            <CardDeck>
              <Card className="homecard" style={{ width: "20rem" }}>
                <CardImg
                  width="100%"
                  src={louisville}
                  alt="Lousville Vegan Jerky"
                />
                <CardImgOverlay>
                  <CardTitle>#1: Louisville Vegan Jerky Co.</CardTitle>
                </CardImgOverlay>
              </Card>
              <Card className="homecard" style={{ width: "20rem" }}>
                <CardImg
                  width="100%"
                  src={farwest}
                  alt="Far West Fungi Vegan Jerky"
                />
                <CardImgOverlay>
                  <CardTitle>#2: Far West Fungi Mushroom Jerky</CardTitle>
                </CardImgOverlay>
              </Card>
              <Card className="homecard" style={{ width: "20rem" }}>
                <CardImg
                  width="100%"
                  src={primal}
                  alt="Primal Spirit Vegan Jerky"
                />
                <CardImgOverlay>
                  <CardTitle>#3: Primal Spirit Foods Primal Strips</CardTitle>
                </CardImgOverlay>
              </Card>
            </CardDeck>
          </Link>
          <br />
          <p>
            You can't go wrong with the top 3, any one of them is a top
            contender on any given day with taste even a carnivore can like.
          </p>
          <hr />
          <h2>
            Vegan jerky can be the most amazing carniverous simulating snack.
          </h2>
          <p>
            That classic texture, chew, spice and satisfaction you remember from
            your cheeseburger slaying meat eating days.
          </p>
          <h2>It can also execute your tastebuds if you grab the wrong bag.</h2>
          <p>
            Like biting in to a banana peel marinated in broccoli and gym socks.
          </p>
          <h2>
            We're here to keep you from snapping in to a bad vegan jerky trip.
          </h2>
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
              jerky. Does it have a long lasting traditional jerky chew or does
              it dissolve on contact like a vodka soaked gummy bear?
            </li>
            <li>
              <strong>Construction:</strong> What's it based on? Soy, Mushroom,
              Seitan, Fruit, Realigned Pea Protein etc..
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
