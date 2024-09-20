
(function () {
    emailjs.init("bxkIXzjgRNWONHzS8"); // تأكد من وضع معرف المستخدم الصحيح هنا
  })();

    // كود JavaScript

    // إضافة class active إلى الهيدر عند التمرير
    let header = document.querySelector("header");

    window.onscroll = function () {
        if (this.scrollY >= 50) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    };

    let nav_links = document.getElementById("links");

    function Open_colose_Menu() {
        nav_links.classList.toggle("active");
    }

    // فتح الروابط في علامات تبويب جديدة
    document.getElementById("openFacebookProfile").addEventListener("click", function () {
        window.open("https://www.facebook.com/aldoushy.mahdy", "_blank");
    });

    document.getElementById("openinstagramProfile").addEventListener("click", function () {
        window.open("https://www.instagram.com/aldoushy/", "_blank");
    });

    // التمرير السلس إلى العناصر
    document.getElementById("education-nav").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("education").scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById("Former-nav").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("Former").scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById("some-nav").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("some").scrollIntoView({
            behavior: 'smooth'
        });
    });

    // تهيئة EmailJS
    (function () {
        emailjs.init("bxkIXzjgRNWONHzS8"); // تأكد من وضع معرف المستخدم الصحيح هنا
    })();

    // التعامل مع إرسال النموذج
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // منع التحديث الافتراضي للصفحة عند الإرسال

        // جمع البيانات من النموذج
        const formData = {
            user_name: document.getElementById("name").value,   // الاسم من النموذج
            user_email: document.getElementById("email").value, // البريد الإلكتروني من النموذج
            message: document.getElementById("message").value   // الرسالة من النموذج
        };

        // إرسال البريد الإلكتروني باستخدام EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text); // نجاح الإرسال
                alert("تم إرسال رسالتك بنجاح!");
            })
            .catch(function (error) {
                console.error("Failed to send email:", error); // تفاصيل الخطأ
                alert("فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.");
            });
    });
