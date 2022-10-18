import {data} from '../../data/data';
export const findDetailsById = id => {
  data.forEach(item => {
    if (item.id === id) {
      return item;
    }
  });
};
