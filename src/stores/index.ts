import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { commonReducer } from './slices/common.slice';
import { userReducer } from "./slices/user";
// Kết hợp reducer
const rootReducer = combineReducers({
    commonStore: commonReducer
});

// Xuất ra store type
export type StoreType = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: {
        rootReducer,
        userStore: userReducer,
    }
})

export default store