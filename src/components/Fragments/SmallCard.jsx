import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function SmallCard(props) {
   const { card_title, card_description, card_link, delete_btn, card_link_Dec } = props;
   return (
      <Card>
         <CardBody>
            <span className="close-btn" onClick={delete_btn} />
            <CardTitle>{card_title}</CardTitle>
            <CardText>
               {card_description.length > 150 ? card_description.substring(0, 150) + "..." : card_description}
            </CardText>
            <Button tag={Link} to={card_link}>
               {card_link_Dec}
            </Button>
         </CardBody>
      </Card>
   );
}

export default SmallCard;
