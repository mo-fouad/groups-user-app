import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import SmallCard from "../Fragments/SmallCard";
import LinkBtn from "../Fragments/LinkBtn";
import { bindActionCreators } from "redux";
import * as groupActions from "../../redux/actions/groupActions";
import * as userActions from "../../redux/actions/userActions";

function Groups(props) {
   const deleteThisGroup = groupSlug => {
      let confirm = window.confirm("Are you sure about deleting this group ?!");
      if (confirm) {
         // checking if the group has any users
         let groupExists = props.usersData.some(user => {
            return user.group_id === groupSlug;
         });

         if (!groupExists) {
            // Deleting Group And Removing Group slug from users table
            const { deleteThisGroup, deleteGroupFromUser } = props;
            deleteThisGroup(groupSlug);

            // if we want to delete the group and leave the users with out Group .. in the future
            // update State with Deleted Group
            deleteGroupFromUser(groupSlug);
         } else {
            // todo: to enhance this Alert with Notification
            alert(
               "this Group Has Users Already, you can't delete it Please delete the Users that joined this group First"
            );
         }
      }
   };

   if (props.groupsData && props.groupsData.length > 0) {
      return (
         <section className="group-cards">
            <Row>
               {props.groupsData.map(group => {
                  return (
                     <Col key={group.group_slug} sm="4">
                        <SmallCard
                           hide_x_btn={true}
                           delete_btn={() => deleteThisGroup(group.group_slug)}
                           card_link={`/group/${group.group_slug}`}
                           card_title={group.group_name}
                           card_description={group.group_description}
                           card_link_Dec={"Visit Group Page"}
                        />
                     </Col>
                  );
               })}
            </Row>
            {/*todo : Handel the paging */}
            <hr />
            <LinkBtn linkText="Add New Group" linkTo="/add-new-group" />
         </section>
      );
   } else {
      return (
         <section className="group-cards">
            <p>Looks like we dont have any groups added yet :(</p>
            <p>but you can add new Groups :)</p>
            <hr />
            <LinkBtn linkText="Add New Group" linkTo="/add-new-group" />
         </section>
      );
   }
}

// Map Redux state to props
function mapStateToProps(state) {
   const groupsData = state.groupsReducer;
   const usersData = state.usersReducer;
   return {
      groupsData,
      usersData
   };
}

// Map action to props so we have access to different actions
function mapDispatchToProps(dispatch) {
   return bindActionCreators(Object.assign({}, groupActions, userActions), dispatch);
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Groups);

Groups.propTypes = {
   deleteGroupFromUser: PropTypes.func.isRequired,
   deleteThisGroup: PropTypes.func.isRequired,
   groupsData: PropTypes.array.isRequired,
   usersData: PropTypes.array.isRequired
};
