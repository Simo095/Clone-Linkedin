export const ADD_FRIEND = "ADD_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

export const addFriendAction = dataFriend => ({ type: ADD_FRIEND, payload: dataFriend });
export const deleteFriendAction = id => ({ type: DELETE_FRIEND, payload: id });
