/*
 * amplify.request.deferred.js - Adding jQuery Deferred support to the amplify.request component
 * version:	0.0.1
 * author: Elijah Manor <elijah.manor@gmail.com> (http://elijahmanor.com)
 * copyright: 2011 - 2012
 * license:	Dual licensed
 * - MIT (http://www.opensource.org/licenses/mit-license)
 * - GPL (http://www.opensource.org/licenses/gpl-license)
 */
(function( amplify, $, undefined ) {
	var properties = [ "types", "resources", "define", "decoders" ];

	amplify.request_original = amplify.request;
	amplify.request = function( resourceId, data ) {
		var dfd = $.Deferred();

		amplify.request_original({
			resourceId: resourceId,
			data: data,
			success: dfd.resolve,
			error: dfd.reject
		});

		return dfd.promise();
	};

	$.each( properties, function( index, key ) {
		amplify.request[ key ] = amplify.request_original[ key ];
	});
})( amplify, jQuery );