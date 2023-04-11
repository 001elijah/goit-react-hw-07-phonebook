import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    reducers: {
        fetchingInProgress(state) {
            state.isLoading = true;
        },
        fetchingSuccess(state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        fetchingError(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        addingInProgress(state) {
           state.isLoading = true; 
        },
        addingSuccess(state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload); //immer under hood
        },
        addingError(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        removingInProgress(state) {
           state.isLoading = true; 
        },
        removingSuccess(state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = [...state.contacts.filter(contact => contact.id !== payload.id)]; //immer under hood
        },
        removingError(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        }
    },
});

export const {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
    addingInProgress,
    addingSuccess,
    addingError,
    removingInProgress,
    removingSuccess,
    removingError
} = contactsSlice.actions;
export default contactsSlice.reducer;