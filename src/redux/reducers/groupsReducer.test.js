import groupsReducer from "./groupsReducer";
import { groupsData } from "../../../__mocks__/data.mock";

it("should Add New Group When Passing Action to add New Group ", () => {
   // arrange
   let payload = {
      group_name: "Test Group",
      group_slug: "test-group",
      group_description: "some text"
   };
   const action = {
      type: "ADD_NEW_GROUP",
      payload: payload
   };

   // act
   const newState = groupsReducer(groupsData, action);
   // Testing New State
   expect(newState.length).toEqual(groupsData.length + 1); // 4 groups >> group has been added
});

it("should DeleteGroup When Passing Action to Delete Group ", () => {
   // Arrange
   let payload = "photography";

   const action = {
      type: "DELETE_THIS_GROUP",
      payload: payload
   };

   // act
   const newState = groupsReducer(groupsData, action);

   // Testing New State
   expect(newState.length).toEqual(groupsData.length - 1); // 2 groups >> group has been Delete
});
