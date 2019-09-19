import { ADD_NEW_GROUP, DELETE_THIS_GROUP } from "../actiontypes";
import initialStatus from "../initialState";

export default function groupsReducer(state = initialStatus.groupsData, action) {
   switch (action.type) {
      case ADD_NEW_GROUP:
         return [...state, action.payload]; // Adding New Group Data to current store
      case DELETE_THIS_GROUP:
         return state.filter(group => group.group_slug !== action.payload);
      default:
         return state;
   }
}
