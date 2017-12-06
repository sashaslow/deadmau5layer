export default function playlist(state = [], action) {
  if (action.type === 'FETCH_TRACKS_SUCCESS') {
    return [
      ...state,
      action.payload,
    ];
  } else if (action.type === 'REMOVE') {
    state = [];
    return [
      ...state,
    ];
  }
  return state;
}
