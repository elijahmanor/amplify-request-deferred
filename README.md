amplify-request-deferred
===========================

This plugin adds jQuery Deferred support to the amplify.request component.

In order to add it to your page you include this plugin after amplify.request.js.

```html
<script src="amplify.request.min.js"></script>
<script src="amplify.request.deferred.min.js"></script>
```

Once you have included this plugin you can continue to define requests as you would normally as seen below.

```javascript
amplify.request.define( "getTweets", "ajax", {
    url: "http://twitter.com/status/user_timeline/{userName}.json",
    dataType: "jsonp",
    type: "GET"
});
```

The main difference is that now when you call `amplify.request` a `promise` will be returned allowing you to use `$.when`, `.done()`, `.fail()`, and the other various jQuery Deferred methods. See below for some example snippets

```
$.when(
    amplify.request( "getTweets", { userName: "elijahmanor", count: 25 } ),
    amplify.request( "getTweets", { userName: "appendto", count: 25 } )
).then(function( elijahmanor, appendto ) {
	console.log( elijahmanor.data );
	console.log( elijahmanor.status );
	console.log( appendto.data );
	console.log( appendto.status );
}, function( elijahmanor, appendto ) {
	// ...
});
```

```javascript
amplify.request( "getTweets", { userName: "elijahmanor", count: 25 } )
	.done(function( data, status ) {
        console.log( data );
        console.log( status );
	}).fail(function( data, status ) {
		// ...
	});
```
