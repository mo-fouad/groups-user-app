import React, { Component } from "react";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";

class SearchBar extends Component {
   state = {
      search_key: ""
   };
   // I have created Search functionality based on Redux State,
   // but it should send to the server the Search Key word and wait for the result to show it :(

   searchFor = e => {
      this.setState({ [e.target.name]: e.target.value });
   };
   emptySearch = () => {
      this.setState({ search_key: "" });
   };

   render() {
      let SearKet = this.state.search_key.length > 0;
      let { usersData, groupsData } = this.props;

      groupsData = groupsData.filter(group => {
         return group.group_name.toLowerCase().includes(this.state.search_key.toLowerCase());
      });

      usersData = usersData.filter(user => {
         return user.user_name.toLowerCase().includes(this.state.search_key.toLowerCase());
      });

      return (
         <div className="search-bar">
            <span className="search-bar__searchIcon" />
            <Input
               type="text"
               name="search_key"
               value={this.state.search_key}
               onChange={this.searchFor}
               onBlur={this.addSlug}
               placeholder="Search For A User or A groups"
            />

            {/*Search Result*/}

            {SearKet && (
               <div className="search-bar__result">
                  <div className="search-bar__result--section">
                     <h5>Grousp</h5>
                     {groupsData.length > 0 ? (
                        groupsData.map(group => (
                           <Link onClick={this.emptySearch} key={group.group_slug} to={`/group/${group.group_slug}`}>
                              <span>{group.group_name}</span>
                           </Link>
                        ))
                     ) : (
                        <p>No Groups Matches this Search</p>
                     )}
                  </div>
                  <hr />
                  <div className="search-bar__result--section">
                     <h5>Users</h5>

                     {groupsData.length > 0 ? (
                        usersData.map(user => (
                           <Link onClick={this.emptySearch} key={user.user_slug} to={`/user/${user.user_slug}`}>
                              <span>{user.user_name}</span>
                           </Link>
                        ))
                     ) : (
                        <p>No Users Matches this Search</p>
                     )}
                  </div>
               </div>
            )}
         </div>
      );
   }
}

export default SearchBar;
