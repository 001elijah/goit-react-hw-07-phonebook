import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
        filter: ''
    },
    reducers: {
        add(state, action) {
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        },
        remove(state, action) {
            return {
                ...state,
                contacts: [...state.contacts.filter(contact => contact.id !== action.payload.id)]
            }
        },
        filter(state, { payload }) {
            return {
                ...state,
                filter: payload
            }
        }
    },
});

export const { add, remove, filter } = contactsSlice.actions;
export default contactsSlice.reducer;