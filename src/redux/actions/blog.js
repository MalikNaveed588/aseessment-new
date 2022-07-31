import { SET_BLOGS, INCREASE_BLOG_CLICK_COUNTER } from "../types";

export const setBlogs = (data) => (dispatch) =>
  dispatch({ type: SET_BLOGS, payload: data });

export const increaseBlogViewCounter = (id) => (dispatch) =>
  dispatch({ type: INCREASE_BLOG_CLICK_COUNTER, payload: id });
