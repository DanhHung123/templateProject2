/*
================
CountDown
================
*/
const time = document.querySelectorAll('.timeData');
const CountDownEl = document.querySelectorAll('.CountDown');
const arr = [];

for (let b = 0; b<time.length;b++) {
    arr.push(time[b].value);
}
// Set the date we're counting down to
for (let i = 0;i < arr.length;i++) {
    var countDownDate = new Date(arr[i]).getTime();
    countDown(countDownDate,CountDownEl[i]);
}
function countDown(countDownDate,el) {
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        days = days < 10 ? '0'+ days : days;
        hours = hours < 10 ? '0'+ hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        // el.innerHTML =  + "d " +  + "h " +  + "m " +  + "s ";
        el.innerHTML = "<span class='icon-Clock'><i class=\"fa-solid fa-clock\"></i></span><div>" + days + "</div> :\n" +
            "                <div>"+ hours +"</div> :\n" +
            "                <div> "+minutes + "</div> :\n" +
            "                <div>" + seconds +"</div>"
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}


/*
================
Search nav
================
*/

const closeIcon = document.querySelector('#glass-icon-nav');
const boxSearch = document.querySelector('#search-nav');
const closeBoxSearchIcon = document.querySelector('#close-nav-search');

closeIcon.onclick = function () {
    boxSearch.classList.toggle('active');
}
closeBoxSearchIcon.onclick = function () {
    boxSearch.classList.toggle('active');
}

// = = = = = = = = = = = = = = = = changeImg = = = = = = = = = = = = = = = =
function changeImg(input) {
    //Nếu như tồn tại thuộc tính file, đồng nghĩa người dùng đã chọn file mới
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        //Sự kiện file đã được load vào website
        reader.onload = function (e) {
            //Thay đổi đường dẫn ảnh
            // $(input).siblings('.la').attr('src', e.target.result);
            let la = input.previousElementSibling;
            la.firstChild.setAtribute('src',e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}