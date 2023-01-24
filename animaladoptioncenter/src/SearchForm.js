function SearchForm({ handleSearchInput })
{
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Dogs:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={handleSearchInput}
            />
        </div>
    )
}
export default SearchForm