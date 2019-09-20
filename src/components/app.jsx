import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as groupsActions from "../redux/actions/groupActions";
// components & layouts
import Header from "./Fragments/Header";
import Footer from "./Fragments/Footer";
import WelcomeHeading from "./home/WelcomeHeading";
import Users from "./usres/Users";
import UserDetails from "./usres/OneUsre";
import AddNewUser from "./usres/AddNewUser";
import Groups from "./groups/Groups";
import GroupDetails from "./groups/OneGroup";
import AddNewGroup from "./groups/AddNewGroup";
// ReactStrap
import { Container, Spinner } from "reactstrap";
import SearchBar from "./search/SearchBar";

class App extends Component {
   render() {
      const { groupsData, usersData } = this.props;

      if (groupsData && groupsData.length > 0) {
         return (
            <Fragment>
               <Header />
               <Container>
                  <SearchBar usersData={usersData} groupsData={groupsData} />
                  <Switch>
                     <Route exact path="/">
                        <WelcomeHeading groupsData={groupsData} usersData={usersData} />
                     </Route>
                     <Route exact path="/groups">
                        <Groups groupsData={groupsData} />
                     </Route>
                     <Route exact path="/users">
                        <Users usersData={usersData} />
                     </Route>
                     <Route exact path="/group/:group_name" component={GroupDetails} />
                     <Route exact path="/user/:user_name" component={UserDetails} />
                     <Route exact path="/add-new-group">
                        <AddNewGroup />
                     </Route>
                     <Route exact path="/add-new-user">
                        <AddNewUser />
                     </Route>
                  </Switch>
               </Container>
               <Footer />
            </Fragment>
         );
      } else {
         return (
            <div className="loading-screen">
               <Spinner color="primary" />
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
   return bindActionCreators(Object.assign({}, groupsActions), dispatch);
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);

App.propTypes = {
   groupsData: PropTypes.array,
   usersData: PropTypes.array
};
