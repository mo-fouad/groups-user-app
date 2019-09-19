import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as groupActions from "../../redux/actions/groupActions";

class AddNewGroup extends Component {
   state = {
      group_name: "",
      group_slug: "",
      group_description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
   };

   inputChanged = e => {
      this.setState({ [[e.target.name]]: e.target.value });
   };

   addSlug = e => {
      let groupSlug = this.state.group_name.toLowerCase().replace(/ /g, "-");
      this.setState({ group_slug: groupSlug });
   };

   handleSubmit = e => {
      e.preventDefault();

      // checking if this Slug already exist
      let groups = this.props.groupsData;
      let groupAlreadyExists = groups.some(group => {
         return group.group_slug === this.state.group_slug;
      });

      if (!groupAlreadyExists) {
         const { addNewGroup } = this.props;
         addNewGroup(this.state);
         this.props.history.push("/groups");
      } else {
         alert("already Exists");
      }

      //this.props.formSubmitted(this.state);
   };

   render() {
      return (
         <div>
            <Row>
               <Col>
                  <Form onSubmit={this.handleSubmit}>
                     <FormGroup>
                        <Label for="addNewGroup">Group Name</Label>
                        <Input
                           required
                           type="text"
                           name="group_name"
                           value={this.state.group_name}
                           onChange={this.inputChanged}
                           onBlur={this.addSlug}
                           id="addNewGroup"
                           placeholder="Group Name"
                        />
                     </FormGroup>
                     <FormGroup>
                        <Label for="exampleText">Group Description</Label>
                        <Input
                           required
                           type="textarea"
                           name="group_description"
                           value={this.state.group_description}
                           onChange={this.inputChanged}
                           id="exampleText"
                        />
                     </FormGroup>
                     <Button>Submit</Button>
                  </Form>
               </Col>
            </Row>
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

// Map action to props so we have access to different actions
function mapDispatchToProps(dispatch) {
   return bindActionCreators(Object.assign({}, groupActions), dispatch);
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withRouter(AddNewGroup));
