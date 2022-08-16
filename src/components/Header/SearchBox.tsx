const SearchBox = () => {
  return (
    <>
      <input
        type="search"
        className="search-box"
        placeholder="Enter delivery address"
      />
      <a
        href="https://identity.doordash.com/auth?client_id=1666519390426295040&enable_last_social=false&intl=en-US&layout=consumer_web&prompt=none&redirect_uri=https%3A%2F%2Fwww.doordash.com%2Fpost-login%2F&response_type=code&scope=%2A&state=%2F%7C%7C307b8aaa-c51b-4bfd-a0e8-468847345130"
        className="saved-address"
      >
        Sign in for saved address
      </a>
    </>
  );
};

export default SearchBox;
