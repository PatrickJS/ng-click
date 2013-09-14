# ng-click.com [![Build Status](https://secure.travis-ci.org/gdi2290/ng-click.png?branch=master)](http://travis-ci.org/gdi2290/ng-click) this is a fork of [mdn.io](https://github.com/gdi2290/mdn.io)
> The "I'm feeling lucky" URL shortener

#### Use it in comments when explaining concepts

```javascript
// Make sure you understand transclusion (see http://ng-click.com/transclusion)
angular.module('transclude', [])
 .directive('pane', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: { title:'@' },
      template: '<div style="border: 1px solid black;">' +
                  '<div style="background-color: gray">{{ title }}</div>' +
                  '<div ng-transclude></div>' +
                '</div>'
    };
});
```

#### As a [lmgtfy] replacement for JavaScript questions

> **friend:** dude, what is transclusion?

> **you:** ng-click.com/transclusion

#### Type directly in the address bar as a shortcut to search the MDN

> [ng-click.com/directive](ng-click.com/directive)

> [ng-click.com/$compile](ng-click.com/$compile)

> [ng-click.com/ understanding the view](ng-click.com/ understanding the view)


## How does it work?

ng-click.com uses Google's "I'm feeling lucky" functionality to redirect you to the first search result.

Note that, because this is a search, the page you're redirected to may change in the future. However, you can rest assured that you'll always be redirected to the page that Google finds most relevant.


## Searching other domains

ng-click.com can be used to search any domain. See the [configuration](#configuration) section and fire up your own instance.


## Starting the server

ng-click.com has no dependencies, start it with:

`PORT=8080 node server.js`

### Configuration

Configure mdn.io with the following environment variables:

| Variable            | Description                                   | Default                                               |
|:------------------- |:--------------------------------------------- |:----------------------------------------------------- |
| **`PORT`**          | The port to run the server on.                | `3000`                                                |
| **`SERVICE`**       | The search service to use `google` or `bing`. | `google`                                              |
| **`SEARCH_DOMAIN`** | The domain to search.                         | `docs.angularjs.org   `                               |
| **`FALLBACK_URL`**  | The fallback URL for empty queries.           | `http://docs.angularjs.org/api/`                     |

**Note:**: Bing does not have an "I'm feeling lucky" equivalent, so you'll be redirected to Bing's search result page instead.

#### Example: Reddit URL shortener

`SEARCH_DOMAIN="reddit.com" FALLBACK_URL="http://reddit.com" PORT=8080 node server.js`


[Angular API Documentation]: http://docs.angularjs.org/api/
[Google Web Search API]: https://developers.google.com/web-search/docs/
