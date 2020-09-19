// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

//     alert("Вы используете мобильное устройство (телефон или планшет).")

// } else alert("Вы используете ПК.")
if (/Android/i.test(navigator.userAgent)) {
    // alert('вы используете андроид');
    window.location.href= "http://play.google.com/store/apps/details?id=<package_name>";
} else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {

}