import { createStore } from "redux";
import groupsReducer from "./reducers/groupsReducer.js";
import usersReducer from "./reducers/usersReducer.js";
import initialStatus from "./initialState";
import { groupsData, usersData } from "../../__mocks__/data.mock";

it("Should Match the Groups Data with the mock", function() {
   // arrange
   const groupStore = createStore(groupsReducer, initialStatus);

   // act passing empty action just to get full state
   const action = {
      type: ""
   };
   groupStore.dispatch(action);

   const createdGroupsData = groupStore.getState().groupsData;
   expect(createdGroupsData).toEqual(groupsData);
});

it("Should Match the Users Data with the mock", function() {
   // arrange
   const userStore = createStore(usersReducer, initialStatus);

   // act passing empty action just to get full state
   const action = {
      type: ""
   };

   userStore.dispatch(action);

   const createdUsersData = userStore.getState().usersData;
   expect(createdUsersData).toEqual(usersData);
});
