import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// GET
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/contacts");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// ADD
export const addContact = createAsyncThunk(
  "contacts/add",
  async (newContact, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", newContact);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// DELETE
export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
