﻿/// <reference path="../../core/core.js" />
Core.register('footer', function (sandbox) {
	'use strict';
	var root, module;
	// root HTML element
	if (!(root = document.querySelector('.footer'))) return;
	
	// return module object
	return module = {
		//switchable styles
		css: '',

		init: function () {
			//show module
			root.style.display = ''
			
		},

		destroy: function () {
			//hide module
			root.style.display = 'none'

		},

		listen: {
			'app-load': function (detail) {
				
			}
		}
	}
})

