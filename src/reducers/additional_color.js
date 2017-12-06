export default function playlist(state = ['lightblue'], action) {
  if (action.type === 'CHANGE_ADDITIONAL_COLOR') {
    return [
      action.payload,
    ];
  }
  return state;
}
