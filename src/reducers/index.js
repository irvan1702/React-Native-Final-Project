const initialState = {
  news: [],
  loading: false,
};

const dataReducer = (previousState = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'FETCH_NEWS':
     return {
       ...previousState,
       loading: true,
     };
    case 'FETCH_NEWS_SUCCESS':
    return {
      ...previousState,
      loading: false,
      news: action.response.sources
    };
    case 'FETCH_NEWS_DETAIL':
    return {
      ...previousState,
      loading: false,
    };
    case 'FETCH_NEWS_DETAIL_SUCCESS':
    return {
      ...previousState,
      loading: false,
      newsDetail: action.response.articles
    };
    default:
      return previousState;
  }
};

export default dataReducer;
