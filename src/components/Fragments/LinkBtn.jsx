import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

function LinkBtn(props) {
   return (
      <>
         <Row className="pt-3 pb-3">
            <Col>
               <Button tag={Link} to={props.linkTo}>
                  {props.linkText}
               </Button>
            </Col>
         </Row>
      </>
   );
}

export default LinkBtn;

LinkBtn.propTypes = {
   linkText: PropTypes.string,
   linkTo: PropTypes.string
};
