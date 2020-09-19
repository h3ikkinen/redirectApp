if (/Android/i.test(navigator.userAgent)) {
    // alert('вы используете андроид');
    window.location.href= "https://play.google.com/store/apps/details?id=com.facebook.katana";
    // window.location.href= "market://details?id=<packagename>";
} else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.href = "https://apps.apple.com/ru/app/facebook/id284882215";
}
