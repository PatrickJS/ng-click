var http = require('http');

/*
  Environment variables:
    PORT: The port to run the server on
    SERVICE: The search service to use. ('google' or 'bing')
    SEARCH_DOMAIN: The domain to search
    FALLBACK_URL: The default URL for empty queries
*/

var ngclick = {
  port:    process.env.PORT    || 3000,
  service: process.env.SERVICE || 'google',

  searchDomain: process.env.SEARCH_DOMAIN || 'docs.angularjs.org',
  fallbackURL:  process.env.FALLBACK_URL  || 'http://docs.angularjs.org/guide/overview',

  serviceURLs: {
    google: 'http://google.com/search?btnI&q=', // Use btnI to enable "I'm feeling lucky"
    bing:   'http://www.bing.com/search?q='
  },

  // Build search URL
  getSearchURL: function(query) {
    return ngclick.serviceURLs[ngclick.service]+encodeURIComponent(query +' site:'+ ngclick.searchDomain);
  },

  // Decode the query
  getQuery: function(url) {
    return unescape(url.slice(1));
  },

  // Handle requests from clients
  handleRequest: function(req, res) {
    var query = ngclick.getQuery(req.url);
    var url   = query ? ngclick.getSearchURL(query) : ngclick.fallbackURL;

    console.log((query || '(empty query)')+' => '+url);

    // Redirect to the URL
    res.writeHead(303, { 'Location': url });
    res.end();
  },

  startServer: function() {
    if (!ngclick.service || !ngclick.serviceURLs.hasOwnProperty(ngclick.service)) {
      ngclick.service = 'google';
    }

    // Start a server
    http.createServer(ngclick.handleRequest).listen(ngclick.port);

    console.log('mdn.io server running on port '+ngclick.port);
    console.log('Search service: '+ngclick.service);
    console.log('Domain: '+ngclick.searchDomain);
    console.log('Default URL: '+ngclick.fallbackURL);
  }
};

// Start the server
ngclick.startServer();
