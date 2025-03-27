export async function fetchNews(query, page) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&pageSize=10&page=${page}&apiKey=992156adf8d04e299e4e13c300b93dee`
  );
  const news = await response.json();

  if (news.status === 'error')
    throw new Error(`We can't get news at this time. please try again later.`);

  return news;
}
