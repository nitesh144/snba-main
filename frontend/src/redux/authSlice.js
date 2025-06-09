
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  toast  from "react-hot-toast";
import supabase from "../SupaBaseClient";

// OTP: Send OTP to phone
export const RegisterWithOtp = createAsyncThunk(
    'form/RegisterWithOtp',
    async (phoneNumber, { rejectWithValue }) => {
      try {
        const phone = `91${phoneNumber}`
        console.log(phone);
        
        const { data, error } = await supabase.auth.signInWithOtp( {phone} );
        if (error) throw error;
        toast.success(`OTP Sent on +91 ${phoneNumber}`)
        return data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );
  
  // OTP: Verify OTP
  export const VerifyOtp = createAsyncThunk(
    'form/verifyOtp',
    async ({ phoneNumber, token }, { rejectWithValue }) => {
      try {
        const phone = `91${phoneNumber}`;
        console.log(phone);
        
        const { data: { session }, error } = await supabase.auth.verifyOtp({
          phone,
          token,
          type: 'sms',
        });
        if (error) throw error;
  
        toast.success("OTP verified successfully!");
        return session;
      } catch (err) {
        toast.error(`OTP verification failed: ${err.message}`);
        return rejectWithValue(err.message);
      }
    }
  );

  const authSlice = createSlice({
    name: 'auth',
    initialState: {
      loading: false,
      error: null,
      otpSent: false,
      otpVerified: false,
      sellerData: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(RegisterWithOtp.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(RegisterWithOtp.fulfilled, (state) => {
          state.loading = false;
          state.otpSent = true;
        })
        .addCase(RegisterWithOtp.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        .addCase(VerifyOtp.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(VerifyOtp.fulfilled, (state) => {
          state.loading = false;
          state.otpVerified = true;
        })
        .addCase(VerifyOtp.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
    },
});  

export default authSlice.reducer;