import getAverageColour from 'incredible-color-averager';

export const setBackgroundColor = color => (dispatch) => {
  dispatch({ type: 'CHANGE_BACKGROUND_COLOR', payload: getAverageColour(color, 'HEX') });
};
