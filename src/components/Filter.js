const Filter = ({type, searchResults, handleSearchChange}) => {
    return (
        <div>
            <h2>Phonebook</h2>
            Search:<input
                type={type}
                value={searchResults}
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Filter