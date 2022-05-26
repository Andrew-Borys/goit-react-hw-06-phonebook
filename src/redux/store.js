import { configureStore } from '@reduxjs/toolkit';
import { ContactsSlice } from './ContactSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsSlice.reducer,
  },
});
