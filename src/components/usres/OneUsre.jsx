import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import * as userActions from "../../redux/actions/userActions";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

function UserDetails(props) {
   let userData = props.usersData.filter(user => {
      return user.user_slug === props.match.params.user_name;
   })[0];

   const deleteThisUser = userSlug => {
      // Delete From users
      let confirmDelete = window.confirm("Are you sure you want to delete this user ?!");

      if (confirmDelete) {
         const { deleteThisUser } = props;
         deleteThisUser(userSlug);
      }
      props.history.push("/users");
   };

   if (userData) {
      return (
         <div>
            <h1>{userData.user_name}</h1>
            <p>group: {userData.group_id}</p>
            <hr />
            <Button onClick={() => deleteThisUser(userData.user_slug)}> Delete This User </Button>
         </div>
      );
   } else {
      return (
         <div>
            <p>No User Exists in this URL</p>
         </div>
      );
   }
}

const mapStateToProps = state => {
   const groupsData = state.groupsReducer;
   const usersData = state.usersReducer;
   return {
      groupsData,
      usersData
   };
};

// Map action to props so we have access to different actions
function mapDispatchToProps(dispatch) {
   return bindActionCreators(Object.assign({}, userActions), dispatch);
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withRouter(UserDetails));
