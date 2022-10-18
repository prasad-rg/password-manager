import faceBookIcon from '../../assets/images/Bitmap.png';
import insta from '../../assets/images/insta.png';
import twitter from '../../assets/images/twitter.png';
import youtube from '../../assets/images/youtube.png';
import {createSlice} from '@reduxjs/toolkit';

const IMAGES_ICONS = [faceBookIcon, insta, twitter, youtube];

import {data} from '../../data/data';

const initialValue = [
  {
    id: '1',
    url: 'accounts.facebook.com',
    siteName: 'www.facebook.com',
    folder: 'Social Media',
    userName: 'smrock',
    sitePassword: '12345678',
    notes: '',
    icon: IMAGES_ICONS[0],
    title: 'Facebook',
  },
  {
    id: '2',
    url: 'accounts.twitter.com',
    siteName: 'www.twitter.com',
    folder: 'Social Media',
    userName: 'smrockgoogle',
    sitePassword: '12345678',
    notes: '',
    icon: IMAGES_ICONS[2],
    title: 'twitter',
  },
  {
    id: '3',
    url: 'accounts.youtube.com',
    siteName: 'www.youtube.com',
    folder: 'Social Media',
    userName: 'smrockyt',
    sitePassword: '1234567777',
    notes: '',
    icon: IMAGES_ICONS[3],
    title: 'Youtube',
  },
  {
    id: '4',
    url: 'accounts.instagram.com',
    siteName: 'www.instagram.com',
    folder: 'Social Media',
    userName: 'smrockinsta',
    sitePassword: '12345678',
    notes: '',
    icon: IMAGES_ICONS[1],
    title: 'Instagram',
  },
];

export const passManagerSlice = createSlice({
  name: 'todo',
  initialState: {
    value: initialValue,
  },
  reducers: {
    createTodo: (state, action) => {
      state.value.push(action.payload);
    },
    switchStatus: (state, action) => {
      state.value = state.value.map(todoItem => {
        if (todoItem.id === action.payload) {
          todoItem.status = !todoItem.status;
        }
        return todoItem;
      });
    },
    editTodo: (state, action) => {
      state.value = state.value.map(todoItem => {
        if (todoItem.id === action.payload.id) {
          todoItem.task = action.payload.task;
        }
        return todoItem;
      });
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(
        todoItem => todoItem.id !== action.payload,
      );
    },
  },
});

export const {createTodo, switchStatus, editTodo, deleteTodo} =
  passManagerSlice.actions;
export default passManagerSlice.reducer;
