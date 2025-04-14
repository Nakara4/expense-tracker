export const SearchBar = ({ searchTerm, onSearch }) => {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by description or name..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
      </div>
    );
  };