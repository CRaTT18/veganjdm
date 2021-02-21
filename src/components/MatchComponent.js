import React from "react";
import forealVlouisville from "../images/foreal_vs_louisville.jpg";
import forealVlouisvilletexture from "../images/foreal_vs_louisville_texture.jpg";
import match2 from "../images/farwest_vs_perky.jpg";
import match2texture from "../images/farwest_vs_perky_texture.jpg";

function Match(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Matches</h1>
          <hr />
          <h2 className="text-center">
            Perky Jerky vs. Far West Fungi Mushroom Jerky
          </h2>
          <h3 className="text-center">
            Special guest referee: Elysian Full Contact Imperial Hazy IPA
          </h3>
          <img
            src={match2}
            className="m-3 img-fluid"
            alt="Far west fungi & Perky Jerky Packages"
          />
          <img
            src={match2texture}
            className="m-3 img-fluid"
            alt="Far west fungi & Perky Jerky Pieces"
          />
          <p className="text-justify">Match 2 report coming soon.</p>
          <h2 className="text-center" style={{ color: "red" }}>
            Winner:
          </h2>
          <hr />
          <h2 className="text-center">
            Foreal Coconut Jerky vs. Louisville Vegan Jerky Co.
          </h2>
          <img
            src={forealVlouisville}
            className="m-3 img-fluid"
            alt="Lousville and Foreal Jerky Packages"
          />
          <img
            src={forealVlouisvilletexture}
            className="m-3 img-fluid"
            alt="Lousville and Foreal Jerky Pieces"
          />
          <p className="text-justify">
            These 2 peppered contenders faced off for the first ever Vegan Jerky
            Deathmatch. Unfortunately it was to be a lopsided contest. The
            smokey textured soy protein from Louisville came out swinging and
            immediately put the coconut meat fo-real on the canvas. Foreal's
            hard as a rock texture nearly broke one of the judges teeth on the
            first bite and then got back in the ring for another go. The second
            piece was thicker and while it gave a nice chew, the unusaul flavor
            put it back down on the mat. Lousville's soft texture and just the
            right amount of smokey black pepper flavor resulted in a first round
            knock out. It was not a good first showing for Foreal's upcycled
            coconut meat surprise, only time will tell if they live to fight
            another day.
          </p>
          <h2 className="text-center" style={{ color: "red" }}>
            Winner by brutal Knock Out: Louisville Vegan jerky Co.
          </h2>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Match;
