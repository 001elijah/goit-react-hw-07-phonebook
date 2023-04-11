import axios from "axios";

import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
    addingInProgress,
    addingSuccess,
    addingError,
    removingInProgress,
    removingSuccess,
    removingError
} from './contactsSlice';

axios.defaults.baseURL = 'https://64342f101c5ed06c9591510a.mockapi.io';

export const fetchContacts = () => async dispatch => {
    try {
        dispatch(fetchingInProgress());
        const response = await axios.get('/contacts');
        dispatch(fetchingSuccess(response.data));
        if (response.length === 0) {
            throw new Error();
        };
        return response.data;
    } catch (error) {
        dispatch(fetchingError(error.message));
    };
};

export const addContact = ({ name, number, id }) => async dispatch => {
    try {
        dispatch(addingInProgress());
        const response = await axios.post('/contacts', { name, phone: number, contactId: id });
        dispatch(addingSuccess(response.data));
        return response.data;
    } catch (error) {
        dispatch(addingError(error.message));
    }
};

export const removeContact = (id) => async dispatch => {
    try {
        dispatch(removingInProgress());
        const response = await axios.delete(`/contacts/${id}`);
        dispatch(removingSuccess(response.data));
        return response.data;
    } catch (error) {
        dispatch(removingError(error.message));
    }
};