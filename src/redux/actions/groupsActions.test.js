import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { ADD_NEW_GROUP } from "../actiontypes";
import * as groupsActions from "./groupActions";

import fetchMock from "fetch-mock";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async thunk Actions ", () => {
   afterEach(() => {
      fetchMock.restore();
   });

   describe("Adding New Group Using Thunk", () => {
      it("Addes a New Group When Add one", () => {
         let testGroupData = {
            group_name: "Test Group",
            group_slug: "test-group",
            group_description: "some text"
         };

         const expectedActions = [
            {
               type: ADD_NEW_GROUP,
               payload: testGroupData
            }
         ];

         const store = mockStore({ groupsData: {} });

         store.dispatch(groupsActions.addNewGroup(testGroupData));
         expect(store.getActions()).toEqual(expectedActions);
      });
   });
});
