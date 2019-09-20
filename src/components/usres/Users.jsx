import React from "react";
import { Col, Row } from "reactstrap";
import SmallCard from "../Fragments/SmallCard";
import LinkBtn from "../Fragments/LinkBtn";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import { connect } from "react-redux";

function Users(props) {
   const { usersData } = props;

   const deleteThisUser = userSlug => {
      // Delete From users
      let confirmDelete = window.confirm("Are you sure you want to delete this user ?!");

      if (confirmDelete) {
         const { deleteThisUser } = props;
         deleteThisUser(userSlug);
      }
   };

   if (usersData && usersData.length > 0) {
      return (
         <section className="group-cards">
            <Row>
               {usersData.map((user, index) => (
                  <Col key={index} md="4">
                     <SmallCard
                        hide_x_btn={true}
                        delete_btn={() => deleteThisUser(user.user_slug)}
                        card_link={`/user/${user.user_slug}`}
                        card_title={user.user_name}
                        card_description={`Group : ${user.group_id}`}
                        card_link_Dec={"Visit User Page"}
                     />
                  </Col>
               ))}
            </Row>
            {/*todo : Handel the paging */}
            <hr />
            <LinkBtn linkText="Add New USer" linkTo="/add-new-user" />
         </section>
      );
   } else {
      return (
         <div>
            <section className="group-cards">
               <p>Looks like we dont have any users added yet :(</p>
               <p>but you can add new user now :)</p>
               <hr />
               <LinkBtn linkText="Add New USer" linkTo="/add-new-user" />
            </section>
         </div>
      );
   }
}

// Map action to props so we have access to different actions
function mapDispatchToProps(dispatch) {
   return bindActionCreators(Object.assign({}, userActions), dispatch);
}

export default connect(
   null,
   mapDispatchToProps
)(Users);
