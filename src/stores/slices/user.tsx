import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const find = createAsyncThunk("/find", async () => {
    let result = await api.users.find();
    return result.data;
});

const authenToken = createAsyncThunk("/authen-token", async () => {
    let result = await api.users.authenToken({
        token: localStorage.getItem("token"),
    });
    return result.data;
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: true,
        data: null,
    },
    reducers: {
        changeLoad: (state: any, action) => {
            return {
                ...state,
                load: !state.load,
            };
        },
        logOut: (state, action) => {
            return {
                ...state,
                userInfor: null,
            };
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(find.fulfilled, (state: any, action: any) => {
            state.data = [...action.payload.data];
        });
        builder.addCase(authenToken.fulfilled, (state: any, action: any) => {
            state.data = action.payload.data;
            // if (action.payload) {
            //   state.data = action.payload.data;
            // } else {
            //   localStorage.removeItem("token");
            // }
        });
        builder.addCase(authenToken.rejected, (state: any, action: any) => {
            localStorage.removeItem("token");
        });

    },
});

export const userActions = {
    ...userSlice.actions,
    find,
    authenToken,
};

export const userReducer = userSlice.reducer;
