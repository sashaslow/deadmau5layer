export default function playlist(state = ['darkslategray'], action) {
  if (action.type === 'CHANGE_BACKGROUND_COLOR') {
    return [
      action.payload,
    ];
  }
  return state;
}
