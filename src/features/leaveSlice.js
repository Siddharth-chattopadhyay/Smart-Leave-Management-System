import { createSlice } from "@reduxjs/toolkit";

const leaveSlice = createSlice({
    "name": "leave",
    "initialState": {
        leaveRequests: {}
    },
    "reducers": {
        submitLeave(state, actions) {
            state.leaveRequests[Date.now().toString()] = { ...actions.payload };
        },

        removeLeaveRequest(state, actions) {
            delete state.leaveRequests[actions.payload];
        },

        editLeave(state, actions) {
            const data = { ...actions.payload };
            delete data["id"];
            state.leaveRequests[actions.payload.id] = data;
        }
    }
});

export const { submitLeave, editLeave, removeLeaveRequest } = leaveSlice.actions;
export default leaveSlice.reducer;

/**
    Employee name
    Leave type
    Start date
    End date
    Reason
    Status
 */

export const submitLeaveAsync = async (name, leaveType, start, end, reason) => {
    return await new Promise((res) => {
        setTimeout(() => {
            res(submitLeave({ name, leaveType, start, end, reason }));
        }, 1000);
    });
}

export const removeLeaveRequestAsync = async (id) => {
    return await new Promise((res) => {
        setTimeout(() => {
            res(removeLeaveRequest(id));
        }, 1000);
    });
}

export const editLeaveAsync = async (id, name, leaveType, start, end, reason) => {
    return await new Promise((res) => {
        setTimeout(() => {
            res(editLeave({ id, name, leaveType, start, end, reason }));
        }, 1000);
    });
}