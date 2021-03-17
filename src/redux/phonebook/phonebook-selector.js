import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.phonebook.filter;
const getAllContacts = (state) => state.phonebook.contacts;

const getPhonebookFilter = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const filterValues = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name?.toLowerCase().includes(filterValues)
    );
  }
);

export default {
  getFilter,
  getAllContacts,
  getPhonebookFilter,
};
