/* nav.js — mobile menu toggle + active link highlighting */
(function () {
	'use strict';
	
	var header = document.querySelector('.site-header');
	var toggle = document.querySelector('.menu-toggle');
	var nav = document.querySelector('.site-nav');
	
	function setMenu(open) {
		if (!header || !toggle) return;
		header.classList.toggle('menu-open', open);
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		toggle.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
	}
	
	if (toggle && header) {
		toggle.addEventListener('click', function () {
			setMenu(!header.classList.contains('menu-open'));
		});
		if (nav) {
			nav.querySelectorAll('a').forEach(function (a) {
				a.addEventListener('click', function () { setMenu(false); });
			});
		}
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && header.classList.contains('menu-open')) {
				setMenu(false);
				toggle.focus();
			}
		});
	}
	
	function normalise(p) {
		if (!p) return '/';
		p = p.replace(/index\.html$/i, '');
		p = p.replace(/\/+$/, '');
		return p || '/';
	}
	var current = normalise(window.location.pathname);
	document.querySelectorAll('.site-nav a').forEach(function (link) {
		var href = link.getAttribute('href');
		if (!href || /^(https?:|mailto:|#|javascript:)/i.test(href)) return;
		try {
			var probe = document.createElement('a');
			probe.href = href;
			if (normalise(probe.pathname) === current) {
				link.classList.add('active');
				link.setAttribute('aria-current', 'page');
			}
		} catch (err) { /* ignore */ }
	});
})();
