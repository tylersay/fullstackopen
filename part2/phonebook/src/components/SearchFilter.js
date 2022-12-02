const SearchFilter = ({ filterField, handleFilterField }) => {
    return (<div>
        filter shown with <input value={filterField}
            onChange={handleFilterField} />
    </div>)
}

export default SearchFilter