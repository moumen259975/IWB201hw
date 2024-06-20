function showForm(propertyId) {
    var formContainer = document.getElementById("formContainer");
    formContainer.style.display = "block";
    formContainer.dataset.propertyId = propertyId;
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var nationalId = document.getElementById("nationalId").value;

    // Validation logic
    if (name === "" || email === "" || phone === "" || nationalId === "") {
        alert("يرجى ملء جميع الحقول");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("البريد الإلكتروني غير صحيح");
        return false;
    }

    if (!isValidPhone(phone)) {
        alert("رقم الهاتف غير صحيح");
        return false;
    }

    if (!isValidNationalId(nationalId)) {
        alert("الرقم الوطني غير صحيح");
        return false;
    }

    alert("تم إرسال البيانات بنجاح!");

    var formContainer = document.getElementById("formContainer");
    formContainer.style.display = "none";

    return false; // Prevent form submission
}

function toggleDetails(propertyId) {
    var detailsRow = document.getElementById(propertyId);
    if (detailsRow.style.display === "none") {
        detailsRow.style.display = "table-row";
    } else {
        detailsRow.style.display = "none";
    }
}

function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Simple phone number validation regex
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function isValidNationalId(nationalId) {
    // Simple national ID validation regex
    var nationalIdRegex = /^\d{12}$/;
    return nationalIdRegex.test(nationalId);
}