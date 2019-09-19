import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import LinkBtn from "../Fragments/LinkBtn";

class AddNewGroup extends Component {
   state = {
      user_name: "",
      user_slug: "",
      group_id: ""
   };

   componentDidMount() {
      // Setting default group slug
      this.setState({ group_id: this.props.groupsData[0].group_slug });
   }

   inputChanged = e => {
      this.setState({ [[e.target.name]]: e.target.value });
   };

   addSlug = e => {
      let userSlug = this.state.user_name.toLowerCase().replace(/ /g, "-");
      this.setState({ user_slug: userSlug });
   };

   handleSubmit = e => {
      e.preventDefault();

      // checking if this Name Slug already exist
      let users = this.props.usersData;
      let userAlreadyExist = users.some(user => {
         return user.user_slug === this.state.user_slug;
      });

      if (!userAlreadyExist) {
         const { addNewUser } = this.props;
         addNewUser(this.state);
         this.props.history.push("/users");
      } else {
         alert("already Exists");
      }
   };

   render() {
      let options = this.props.groupsData.map(group => (
         <option key={group.group_slug} value={group.group_slug}>
            {group.group_name}
         </option>
      ));

      if (this.props.groupsData && this.props.groupsData.length > 0) {
         return (
            <div>
               <Row>
                  <Col>
                     <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                           <Label for="addNewGroup">User Name</Label>
                           <Input
                              required
                              type="text"
                              name="user_name"
                              value={this.state.user_name}
                              onChange={this.inputChanged}
                              onBlur={this.addSlug}
                              id="addNewUser"
                              placeholder="user name"
                           />
                        </FormGroup>
                        <FormGroup>
                           <Input
                              required
                              type="select"
                              name="group_id"
                              value={this.state.group_id}
                              onChange={this.inputChanged}
                           >
                              {options}
                           </Input>
                        </FormGroup>
                        <Button>Submit</Button>
                     </Form>
                  </Col>
               </Row>
            </div>
         );
      } else {
         return (
            <div>
               <h4>
                  {`PLease note that we don't have any groups yet .. and you cant add any users without groups :( Please
                  add at least one group first ^_^`}
               </h4>
               <hr />
               <LinkBtn linkText="Add New Group" linkTo="/add-new-form" />
            </div>
         );
      }
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
   return bindActionCreators(Object.assign({}, userActions), dispatch);
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withRouter(AddNewGroup));
