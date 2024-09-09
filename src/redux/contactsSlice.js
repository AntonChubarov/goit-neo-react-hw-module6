import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        loadContacts: (state, action) => {
            return action.payload;
        },
        addContact: (state, action) => {
            state.push(action.payload);
        },
        deleteContact: (state, action) => {
            return state.filter((contact) => contact.id !== action.payload);
        },
    },
});

export const { loadContacts, addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
