import React from "react";
import { Link } from "react-router-dom";
import { Button, Jumbotron, Row } from "reactstrap";

function WelcomeHeading() {
   return (
      <div>
         <Jumbotron>
            <h3 className="display-3">Hello, to Groupyz App</h3>
            <p className="lead">
               This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured
               content or information.
            </p>
            <hr className="my-2" />
            <Row>
               <Button tag={Link} to="/groups" color="primary">
                  Show All Groups
               </Button>
               <Button className="ml-auto" tag={Link} to="/users" color="primary">
                  Show All Users
               </Button>
            </Row>
         </Jumbotron>{" "}
      </div>
   );
}

export default WelcomeHeading;
