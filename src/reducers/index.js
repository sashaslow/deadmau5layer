import { combineReducers } from 'redux';

import videos from './videos';
import currentVideo from './current_video';
import backgroundColor from './background_color';
import additionalColor from './additional_color';

export default combineReducers({
  videos,
  currentVideo,
  backgroundColor,
  additionalColor,
});

