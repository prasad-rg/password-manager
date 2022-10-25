import faceBookIcon from '../../assets/images/Bitmap.png';
import insta from '../../assets/images/insta.png';
import twitter from '../../assets/images/twitter.png';
import youtube from '../../assets/images/youtube.png';
import {createSlice} from '@reduxjs/toolkit';

const IMAGES_ICONS = [faceBookIcon, insta, twitter, youtube];

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
    userId: '8904177732',
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
    title: 'Twitter',
    userId: '8904177732',
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
    userId: '8904177732',
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
    userId: '8904177732',
  },
];

export const passManagerSlice = createSlice({
  name: 'passManager',
  initialState: {
    value: initialValue,
    preValue: initialValue,
  },
  reducers: {
    addNewPassword: (state, action) => {
      state.value.push(action.payload);
      state.preValue.push(action.payload);
    },
    updatePasswordDetails: (state, action) => {
      state.value = state.value.map(passwordObject => {
        if (passwordObject.id === action.payload.id) {
          passwordObject = action.payload;
        }
        return passwordObject;
      });
      state.preValue = state.value;
    },
    deletePassword: (state, action) => {
      state.value = state.value.filter(
        passwordDetails => passwordDetails.id !== action.payload,
      );
      state.preValue = state.value;
    },
    filterList: (state, action) => {
      state.value = state.preValue.filter(passwordDetails =>
        passwordDetails.title
          .toLowerCase()
          .includes(action.payload.toLowerCase()),
      );
    },
    dropDownFilter: (state, action) => {
      if (action.payload === 'All') {
        state.value = state.preValue;
      } else {
        state.value = state.preValue.filter(passwordDetails =>
          passwordDetails.folder
            .toLowerCase()
            .includes(action.payload.toLowerCase()),
        );
      }
    },
  },
});

export const {
  addNewPassword,
  updatePasswordDetails,
  deletePassword,
  filterList,
  dropDownFilter,
} = passManagerSlice.actions;
export default passManagerSlice.reducer;
