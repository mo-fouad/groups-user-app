import { ADD_NEW_USER, DELETE_GROUP_FROM_USERS, DELETE_THIS_USER } from "../actiontypes";

export const loadUsersData = () => {
   return {
      type: ADD_NEW_USER
   };
};

export const addNewUser = NewUserData => {
   return {
      type: ADD_NEW_USER,
      payload: NewUserData
   };
};

export const deleteThisUser = userSlug => {
   return {
      type: DELETE_THIS_USER,
      payload: userSlug
   };
};

export const deleteGroupFromUser = groupSlug => {
   return {
      type: DELETE_GROUP_FROM_USERS,
      payload: groupSlug
   };
};
