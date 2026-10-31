<<<<<<< HEAD
# aam-group
An initial project for finding the path created using AI
=======
# AAM Group — سایت استودیو

سایت استاتیک چندصفحه‌ای، فقط با HTML/CSS/JS خالص. بدون فریم‌ورک و بدون بیلد.

## اجرا

پوشه را باز کنید و روی `index.html` دوبار کلیک کنید. برای پیش‌نمایش بهتر (به‌خصوص برای فرم) می‌توانید یک سرور محلی اجرا کنید:

python3 -m http.server 8000

## ویرایش

- رنگ‌ها، فاصله‌ها و تایپ‌اسکیل در `css/global.css` تحت `:root`.
- هدر و فوتر در هر صفحه تکرار شده‌اند — برای تغییر سراسری، از `_template.html` به‌عنوان منبع استفاده کنید.
- متن‌ها مستقیم در HTML هستند؛ جست‌وجوی «[نام بنیان‌گذار]» و «[X]» برای پُرکردن جای‌نگهدارها.
- برای اتصال واقعی فرم، در `contact.html` مقدار `action` فرم را به endpoint سرویس Formspree یا Basin تغییر دهید و `js/contact-form.js` را برای ارسال واقعی (fetch) به‌روزرسانی کنید.

## انتشار

پوشه را در Netlify یا Cloudflare Pages رها کنید تا HTTPS و CDN خودکار فعال شود.

هدرهای امنیتی را در فایل `_headers` در ریشه‌ی پروژه (برای Netlify/Cloudflare) یا در تنظیمات هدر پلتفرم تنظیم کنید:

/*
 C ontent-Security-Policy: default-src 'self'; img*-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'
 Strict-Transport-Security: max-age=31536000; includeSubDomains
 X-Content-Type-Options: nosniff
<!--  Referrer-Policy: strict-origin-when-cross-origin -->
>>>>>>> 56f9f3a (First Edition)
