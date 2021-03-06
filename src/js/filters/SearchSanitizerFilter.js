﻿ /// <reference path='../../libs/angular.d.ts' />
'use strict';

angular.module('mitopedia.filters.searchSanitizer', [])
	.filter('searchSanitizer', function() {
		return function(item) {
			return typeof item !== 'string' ? item : item.toLowerCase().replace(/à|á|ä|â/, 'a').replace(/è|é|ë|ê/, 'e').replace(/ì|í|ï|î/, 'i').replace(/ò|ó|ö|ô/, 'o').replace(/ù|ú|ü|û/, 'u');
		};
	});
