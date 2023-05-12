import {atom} from "recoil";

export const movies = atom({
    key: "movies",
    default: {
        day: [],
        week: [],
    },
  });
  
export const view = atom({
    key: "view",
    default: "day",
  })
  