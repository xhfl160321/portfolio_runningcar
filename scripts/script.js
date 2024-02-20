// media query 시 작동되는 메뉴 이벤트
var navBar = $("#nav_bar");
var navBtnShow = $("i.fas.fa-ellipsis");
var navBtnhide = $("i.fas.fa-xmark");

navBtnShow.click(function () {
    navBar.css({ "right": "0" });
    console.log("menu show");
});

navBtnhide.click(function () {
    navBar.css({ "right": "-200px" });
    console.log("menu hide");
});

// 이미지 슬라이드
const slideList = $(".review_slide ul");
const slideImg = $(".review_slide ul li");

var slide = setInterval(slideFun, 2000);
var idx = 1;

function slideFun() {
    slideList.animate({ "left": -380 * idx + "px" }, 300);
    idx++;
    if (idx > slideImg.length - 3) {
        slideList.animate({ "left": 0 }, 0);
        idx = 0;
    }
}

// 양 끝 이미지 복사
const lastIndex = slideImg.length -1;

function cloneElement(){
    slideList.prepend(slideImg[lastIndex].cloneNode(true));
    slideList.append(slideImg[0].cloneNode(true));
    setTranslate({ reset: true });
}

// 로고 이미지 움직이는 애니메이션
function movingLogo(){
    $("#logo").animate({right : "1920px"}, 10000, null, function(){
        $(this).animate({right : "-1920px"}, 10000, null, function(){
            movingLogo();
        });
    });
    console.log("hello");
}
movingLogo();

// x버튼 클릭시 닫힘
// 각 질문 클릭 시 해당 답변 show
const qBtn = $(".question li img");
const aList = $(".answer li.a_list");
const xBtn = $(".answer li p:first-child");

aList.hide();

xBtn.click(function () {
    aList.hide();
});

qBtn.each(function(index, obj){
    console.log(index, obj);
    var target = $(this);

    target.click(function(e){
        e.preventDefault();

        console.log(index, obj,"!!button click");

        target.removeClass("active");
        target.addClass("active");

        aList.hide();
        aList.eq(index).show();
    })
})


// 클릭 시 부드러운 이동
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});