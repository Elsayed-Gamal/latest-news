import NewsContainer from './components/NewsContainer';
import SearchBar from './components/SearchBar';
import { useNews } from './hooks/useNews';
import styles from './App.module.css';

function App() {
  const { news, isPending, query, setQuery } = useNews();

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <div className={styles.container}>
      <SearchBar query={query} onChange={handleChangeQuery} />
      <h1 className={styles.maidHeading}>Letest news about #{query}</h1>
      {isPending && <p>Loading news ...</p>}
      {news && <NewsContainer news={news} />}
    </div>
  );
}

export default App;
