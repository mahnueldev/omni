import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';


const authSlice = createSlice({
    name: 'auth',
    initialState: { userInfo: null, token: Cookies.get('jwt') },
    reducers: {
        setCredentials: (state, action) => {
            const { userInfo, accessToken } = action.payload;
            Cookies.set('jwt', accessToken);
            state.user = userInfo;
            state.token = accessToken;
        },
        
        logOut: (state) => {
            state.user = null;
            Cookies.remove('jwt');
            state.token = null;
        },
        
       
        
    },
});

export const { setCredentials, logOut} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.userInfo;
export const selectCurrentToken = (state) => state.auth.token;
