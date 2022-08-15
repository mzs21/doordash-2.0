const SearchBox = () => {
  return (
    <>
      <input
        type="search"
        className="search-box"
        placeholder="Enter delivery address"
      />
      <p className="saved-address">Sign in for saved address</p>
    </>
  );
};

export default SearchBox;
