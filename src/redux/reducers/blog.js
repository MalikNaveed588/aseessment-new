import { INCREASE_BLOG_CLICK_COUNTER, SET_BLOGS } from "../types";

const initialState = {
  blogs: [],
  blogClicks: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case INCREASE_BLOG_CLICK_COUNTER: {
      const item = state.blogClicks[action.payload];
      return {
        ...state,
        blogClicks: {
          ...state.blogClicks,
          [action.payload]: item ? item + 1 : 1,
        },
      };
    }
    default:
      return state;
  }
}
