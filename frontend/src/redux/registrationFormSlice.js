import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserApi } from "./registrationApi";

export const userRegister = createAsyncThunk(
  "user/register",
  async ( formData ) => {
    const user = await createUserApi( formData);
    return user;
  }
);

const usersSlice = createSlice({
  name: "users",
 
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
    }
    })

    export default usersSlice.reducer;