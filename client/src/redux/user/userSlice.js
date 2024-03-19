import { createSlice } from "@reduxjs/toolkit";
const initialState={
    currentUser: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      signInStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      signInSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      },
      signInFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      updateSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      },
      updateFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      deleteUserStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      deleteUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      },
      deleteUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      signoutSuccess: (state) => {
        state.currentUser = null;
        state.error = null;
        state.loading = false;
      },
      // deleteUserNotification: (state, action) => {
      //   if (state.currentUser) {
      //     state.currentUser.notification = state.currentUser.notification.filter(
      //       notification => notification._id !== action.payload
      //     );
      //   }
      // }
      deleteUserNotification: (state, action) => {
        if (state.currentUser && state.currentUser.notification) {
          const notificationId = action.payload; // Access the notification ID from the action payload
          state.currentUser.notification = state.currentUser.notification.filter(
            (notification) => notification._id !== notificationId
          );
        }
      },
    }}
    )

    export const {
        signInStart,
        signInSuccess,
        signInFailure,
        updateFailure,updateStart,updateSuccess,deleteUserStart,
        deleteUserSuccess,
        deleteUserFailure, signoutSuccess, deleteUserNotification
    } = userSlice.actions;

    export default userSlice.reducer;