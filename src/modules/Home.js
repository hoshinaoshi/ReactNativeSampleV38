import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios";

export const APIClient = axios.create({
  baseURL: "http://localhost"
});

// action type
const INCREMENT = "HOME_INCREMENT";
const AFTER_INCREMENT = "HOME_AFTER_INCREMENT";
const DECREMENT = "HOME_DECREMENT";

// action-creator
export function increment() {
  return { type: INCREMENT };
}

export function afterIncrement() {
  return { type: AFTER_INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

// redux-saga
function executeAPI() {
  let error;
  let response;
  /* axiosを使用してAPI通信
  return APIClient.get("/users", {}).then((response) => {
    return { response, error }
  })
  */
  return { response, error }
}

function* incrementCount(action) {
  const { response, error } = yield call(executeAPI);
  yield put({type: AFTER_INCREMENT});
}

export const HomeSagas = [
  takeLatest(INCREMENT, incrementCount),
]

// reducer
const initialState = {
  count: 0,
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state;
  }
}
