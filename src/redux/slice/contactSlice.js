import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
}


const contactSlice = createSlice({
  // Ім'я слайсу
  name: "contact",
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {
    deleteForm: (state, action) => {
        state.contacts = state.contacts.filter(user => user.id !== action.payload)
    },
    addContact: (state, action) => {
        state.contacts = [...state.contacts, action.payload ]
    }
  },
  

});



// Генератори екшенів
export const { deleteForm, addContact} = contactSlice.actions;
// Редюсер слайсу
export const contactReducer = contactSlice.reducer;