export const fetchNews = () => {
  return {
    type: 'FETCH_NEWS'
  };
};

export const fetchNewsDetail = () => {
  console.log("fetchNewsDetail")
  return {
    type: 'FETCH_NEWS_DETAIL'
  };
};
