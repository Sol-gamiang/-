document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting by default
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // اینجا می‌توانید کد اعتبارسنجی را اضافه کنید

    // مثال: اگر نام کاربری و رمز عبور خالی باشد، پیام خطا نمایش داده شود
    if (username === "" || password === "") {
        document.getElementById("message").innerText = "Please enter username and password.";
        return;
    }

    // اگر همه‌ی اطلاعات معتبر باشند، اینجا می‌توانید کد ارسال اطلاعات به سرور را اضافه کنید
});
