export async function fetchNews() {
  try {
    const response = await fetch('https://newsapi.org/v2/sources?apiKey=d31a85f5dffc42c38e3823ed8854aab9&language=en&country=us');
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchNewsDetail() {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?apiKey=d31a85f5dffc42c38e3823ed8854aab9&language=en&sources=abc-news');
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
