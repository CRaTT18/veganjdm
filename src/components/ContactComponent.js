import React from "react";
import { Button } from "reactstrap";
import axe from "../images/axe.png";

function Contact(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img className="bigaxe" alt="big axe" src={axe} />
        </div>
        <div className="col-md-9 text-justify">
          <h1>Contact</h1>
          <hr />
          <p>
            Want to tell us what you think? Want to send us some beer & jerky to
            review?
          </p>
          <Button outline color="dark" size="lg" block>
            <a role="button" className="btn" href="mailto:ratt18@hotmail.com">
              <h1 style={{ color: "#ed2024" }}>Send us an email</h1>
            </a>
          </Button>
          <br />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Contact;
