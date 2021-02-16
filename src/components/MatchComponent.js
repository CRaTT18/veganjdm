import React from "react";
import forealVlouisville from "../images/foreal_vs_louisville.jpg";
import forealVlouisvilletexture from "../images/foreal_vs_louisville_texture.jpg";

function Match(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Matches</h1>
          <hr />
          <h2 className="text-center">Foreal Coconut Jerky vs. Louisville Vegan Jerky Co.</h2>
          <img src={forealVlouisville} className="m-4 img-fluid" alt="Lousville and Foreal Jerky Packages" /><img src={forealVlouisvilletexture} className="m-4 img-fluid" alt="Lousville and Foreal Jerky Pieces"/>
          <p className="text-justify">These 2 peppered contenders faced off for the first ever Vegan Jerky Deathmatch. Unfortunately it was to be a lopsided contest. The smokey textured soy protein from Louisville came out swinging and immediately put the coconut meat fo-real on the canvas. Foreal's hard as a rock texture nearly broke one of the judges teeth on the first bite and then got back in the ring for another go. The second piece was thicker and while it gave a nice chew, the unusaul flavor put it back down on the mat. Lousville's soft texture and just the right amount of smokey black pepper flavor resulted in a first round knock out. It was not a good first showing for Foreal's upcycled coconut meat surprise, only time will tell if they live to fight another day.</p>
          <h2 className="text-center">Winner by brutal Knock Out: Louisville Vegan jerky Co.</h2>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default Match;
