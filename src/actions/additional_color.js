import getAverageColour from 'incredible-color-averager';

export const setAdditionalColor = color => (dispatch) => {
  dispatch({ type: 'CHANGE_ADDITIONAL_COLOR', payload: getAverageColour(color, 'HEX', true) });
};
