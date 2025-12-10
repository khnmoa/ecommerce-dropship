


document.addEventListener("DOMContentLoaded", function () {
    // تعريف العناصر
    const storeBtn = document.getElementById("storeBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // التحقق من وجود العناصر لتجنب الأخطاء
    if (storeBtn && dropdownMenu) {
        
        // عند الضغط على الزر، يتم تفعيل أو إلغاء تفعيل القائمة
        storeBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // منع إغلاق القائمة فوراً عند الضغط
            dropdownMenu.classList.toggle("show");
        });

        // إغلاق القائمة عند الضغط في أي مكان آخر في الصفحة
        document.addEventListener("click", function (e) {
            if (!storeBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }
});