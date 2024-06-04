import { createAction, handleActions } from "redux-actions";

const SET_PREVIOUS_URL = "pageControl/SET_PREVIOUS_URL";

export const setPreviousUrl = createAction(
  SET_PREVIOUS_URL,
  (previousUrl) => previousUrl
);

const initialValue = {
  previousUrl: "",
};

const pageControl = handleActions(
  {
    [SET_PREVIOUS_URL]: (state, action) => ({
      ...state,
      previousUrl: action.payload,
    }),
  },
  initialValue
);

export default pageControl;
