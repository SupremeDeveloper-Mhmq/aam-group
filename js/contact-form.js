/* contact-form.js — client-side validation + demo submit state */
(function () {
	'use strict';
	
	var form = document.querySelector('#contact-form');
	if (!form) return;
	
	var fields = {
		name: form.querySelector('#name'),
 email: form.querySelector('#email'),
 need: form.querySelector('#need')
	};
	var errors = {
		name: form.querySelector('#name-error'),
 email: form.querySelector('#email-error'),
 need: form.querySelector('#need-error')
	};
	var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	function setError(key, msg) {
		var errEl = errors[key];
		var field = fields[key];
		if (errEl) errEl.textContent = msg || '';
		if (field) field.setAttribute('aria-invalid', msg ? 'true' : 'false');
	}
	
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		var firstInvalid = null;
		setError('name', '');
		setError('email', '');
		setError('need', '');
		
		if (!fields.name || !fields.name.value.trim()) {
			setError('name', 'نام را وارد کنید.');
			if (!firstInvalid) firstInvalid = fields.name;
		}
		if (!fields.email || !emailRe.test(fields.email.value.trim())) {
			setError('email', 'یک ایمیل معتبر وارد کنید.');
			if (!firstInvalid) firstInvalid = fields.email;
		}
		if (!fields.need || !fields.need.value) {
			setError('need', 'نوع درخواست را انتخاب کنید.');
			if (!firstInvalid) firstInvalid = fields.need;
		}
		
		if (firstInvalid) {
			firstInvalid.focus();
			return;
		}
		
		var btn = form.querySelector('button[type="submit"]');
		if (btn) {
			btn.disabled = true;
			btn.textContent = 'در حال ارسال…';
		}
		var status = form.querySelector('.form-status');
		if (status) {
			status.hidden = false;
			status.textContent = 'این یک فرم نمایشی است. برای فعال‌سازی ارسال واقعی، آن را به Formspree یا Basin متصل کنید. در این میان، مستقیماً به hello@aamgroup.com ایمیل بزنید.';
		}
	});
})();
