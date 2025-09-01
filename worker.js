export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Only match your domain
    if (url.hostname === "ro.bookkeepie.com") {
      // Decode path and check if it contains px.ads.linkedin.com/collect
      const decodedPath = decodeURIComponent(url.pathname);

      if (decodedPath.includes("px.ads.linkedin.com/collect?pid=3721604")) {
        // Permanent redirect (301) to homepage or safe page
        return Response.redirect("https://ro.bookkeepie.com/", 301);
      }
    }

    // Default: allow normal requests
    return fetch(request);
  },
};
