import React from "react";
import PropTypes from "prop-types";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function SmallCard(props) {
   const { card_title, card_description, card_link, delete_btn, card_link_Dec, hide_x_btn } = props;
   return (
      <Card>
         <CardBody>
            {hide_x_btn && <span className="close-btn" onClick={delete_btn} />}
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

SmallCard.propTypes = {
   card_description: PropTypes.String,
   card_link: PropTypes.string,
   card_link_Dec: PropTypes.string,
   card_title: PropTypes.string,
   delete_btn: PropTypes.string,
   hide_x_btn: PropTypes.bool
};
