import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCH4Xp6K_n7hUKDJHDW6CMt2R-LqDk0THU';

export const asyncGetTracks = term => (dispatch) => {
  dispatch({ type: 'REMOVE' });
  YTSearch({ key: API_KEY, term: `deadmau5 ${term}` }, (videos) => {
    videos.map((props) => {
      dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: props });
    });
  });
};
