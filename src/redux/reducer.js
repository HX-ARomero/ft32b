import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITES:
      //console.log(state.myFavorites)
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case DELETE_FAVORITES:
      const filtered = state.myFavorites.filter((fav) => fav.id !== payload);
      return {
        ...state,
        myFavorites: filtered,
      };
    case FILTER:
      const filterCopy = [...state.allCharacters];
      const filter = filterCopy.filter((ch) => ch.gender === payload);
      return {
        ...state,
        myFavorites: filter,
      };
    case ORDER: {
      const orderCopy = [...state.allCharacters];
      const order = orderCopy.sort((a, b) => {
        if (a.id < b.id) {
          return payload === "Ascendente" ? 1 : -1;
        }
        if (a.id > b.id) {
          return payload === "Ascendente" ? -1 : 1;
        }
      });
    }
    // const orderCopy = [...state.allCharacters]
    // const order = orderCopy.sort()
    // return {
    //     ...state,
    //     myFavorites: order
    // }

    default:
      return state;
  }
}
