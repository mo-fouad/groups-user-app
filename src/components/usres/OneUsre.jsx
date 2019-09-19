import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

function UserDetails(props) {
   let userData = props.usersData.filter(user => {
      return user.user_slug === props.match.params.user_name;
   })[0];

   const deleteThisUser = userSlug => {
      // Delete this User
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

export default connect(mapStateToProps)(UserDetails);
