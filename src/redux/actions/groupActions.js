import { ADD_NEW_GROUP, DELETE_THIS_GROUP } from "../actiontypes";

export const loadGroupsData = () => {
   return {
      type: ADD_NEW_GROUP
   };
};

export const addNewGroup = NewGroupData => {
   return {
      type: ADD_NEW_GROUP,
      payload: NewGroupData
   };
};

export const deleteThisGroup = groupSlug => {
   return {
      type: DELETE_THIS_GROUP,
      payload: groupSlug
   };
};
