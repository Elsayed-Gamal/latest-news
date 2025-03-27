import styles from './SearchBar.module.css';

function SearchBar({ query, onChange }) {
  return (
    <div className={styles.searchContainer}>
      <input
        id="search"
        className={styles.search}
        type="text"
        value={query}
        onChange={onChange}
        placeholder="Type anything to search here"
      />
    </div>
  );
}

export default SearchBar;
