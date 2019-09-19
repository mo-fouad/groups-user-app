import { ADD_NEW_USER, DELETE_GROUP_FROM_USERS, DELETE_THIS_USER } from "../actiontypes";
import initialStatus from "../initialState";

export default function usersReducer(state = initialStatus.usersData, action) {
   switch (action.type) {
      case ADD_NEW_USER:
         return [...state, action.payload];
      case DELETE_THIS_USER:
         return state.filter(user => user.user_slug !== action.payload);
      case DELETE_GROUP_FROM_USERS:
         return state.map(user => (user.group_id === action.payload ? { ...user, group_id: "no group :(" } : user));
      default:
         return state;
   }
}
