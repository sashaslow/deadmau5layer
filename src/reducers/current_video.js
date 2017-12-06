export default function playlist(state = [], action) {
  if (action.type === 'CHANGE_CURRENT_TRACK') {
    return [
      action.payload,
    ];
  }
  return state;
}
