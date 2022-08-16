const NavBar = () => {
  return (
    <nav>
      <div className="ml-6">
        <a href="https://mzs21.github.io/doordash-2.0/">
        <svg width="56" height="32" viewBox="0 0 99.5 56.5" fill="#ffffff">
          <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"></path>
        </svg>
        </a>
      </div>
      <span className="auths">
        <div className="text-white ">
          <a href="https://identity.doordash.com/auth?client_id=1666519390426295040&enable_last_social=false&intl=en-US&layout=consumer_web&prompt=none&redirect_uri=https%3A%2F%2Fwww.doordash.com%2Fpost-login%2F&response_type=code&scope=%2A&state=%2Fhome%2F%7C%7C58814fec-563f-48eb-b140-99ad065aeda7">
            Sign in
          </a>
        </div>
        <button className="signUp">
          <a href="https://identity.doordash.com/auth/user/signup?client_id=1666519390426295040&enable_last_social=false&intl=en-US&layout=consumer_web&prompt=none&redirect_uri=https%3A%2F%2Fwww.doordash.com%2Fpost-login%2F&response_type=code&scope=%2A&state=%2Fhome%2F%7C%7C58814fec-563f-48eb-b140-99ad065aeda7">
            Sign up
          </a>
        </button>
      </span>
    </nav>
  );
};

export default NavBar;
