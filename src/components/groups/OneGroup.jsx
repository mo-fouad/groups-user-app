import React from "react";
import { connect } from "react-redux";
import LinkBtn from "../Fragments/LinkBtn";
import SmallCard from "../Fragments/SmallCard";
import { Button, Col, Row } from "reactstrap";

function GroupDetails(props) {
   let groupData = props.groupsData.filter(group => {
      return group.group_slug === props.match.params.group_name;
   })[0];

   let usersData = props.usersData.filter(user => {
      return user.group_id === props.match.params.group_name;
   });

   const delteThisGroup = groupSlug => {
      // Delete This Group
   };

   if (groupData) {
      return (
         <section className="group-cards">
            <Row>
               <Col md="12">
                  <h3>{groupData.group_name}</h3>
                  <p>{groupData.group_description}</p>
                  <hr />
                  <Button onClick={() => delteThisGroup(groupData.group_slug)}>Delete this Group</Button>
               </Col>
            </Row>
            <hr />
            <Row>
               {usersData && (
                  <>
                     <Col md="12">
                        <h4>Users That Joined This Group</h4>
                     </Col>
                     {usersData.map((user, index) => (
                        <Col key={index} md="4">
                           <SmallCard
                              card_id={`/user/${user.user_id}`}
                              card_title={user.user_name}
                              card_description=""
                              card_link={`/user/${user.user_slug}`}
                           />
                        </Col>
                     ))}
                  </>
               )}
               {!usersData.length > 0 && <Col md="12">Upss, we dont Have any users Yet :(</Col>}
            </Row>
            <hr />
            <LinkBtn linkText="Add More Users" linkTo="/users" />
         </section>
      );
   } else {
      return (
         <div>
            <p>Sorry No match for this URL</p>
         </div>
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

export default connect(mapStateToProps)(GroupDetails);
