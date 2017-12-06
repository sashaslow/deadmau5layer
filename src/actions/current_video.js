export const setCurrentVideo = video => (dispatch) => {
  dispatch({ type: 'CHANGE_CURRENT_TRACK', payload: video });
};

