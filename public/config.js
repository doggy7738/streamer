window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  // If not specified, the onboarding will not allow a "default setup". The user will have to use the extension or set up a proxy themselves
  VITE_CORS_PROXY_URL: "https://pixie.pres1234569.workers.dev",

  VITE_BACKEND_URL: "https://server.vidbinge.com",

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDRiYjcxYTMzMWNmZmI4ODM3ZmU1NjUxOWNhNGFiOSIsIm5iZiI6MTcwNzc2Mjc3Mi40NzIsInN1YiI6IjY1Y2E2NDU0NTRhMDk4MDE2MzAyOTkxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bADK-g4gLqtvsSijQQDJpgs5jgUWKwLBBNt6NZhoUoc",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: null,

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: true,

  // The backend URL to communicate with
  VITE_BACKEND_URL: null,

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: ""
};
