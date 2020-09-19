// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

//     alert("Вы используете мобильное устройство (телефон или планшет).")

// } else alert("Вы используете ПК.")
if (/Android/i.test(navigator.userAgent)) {
    // alert('вы используете андроид');
    window.location.href= "https://play.google.com/store/apps/details?id=com.vkontakte.android&hl=ru";
    // window.location.href= "market://details?id=<packagename>";
} else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.href = "https://apps.apple.com/ru/app/facebook/id284882215";
}
