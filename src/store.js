import { configureStore } from "@reduxjs/toolkit";
import leaveSlice from "./features/leaveSlice";

const store = configureStore({
    "reducer": {
        leave: leaveSlice
    }
});

export default store;