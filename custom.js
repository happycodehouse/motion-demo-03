const $pagination = document.getElementById("swiperPagination");
const paginationNameArray = ["product 1", "product 2", "product 3", "product 4"];

function init() {

}

const demo3Swiper = new Swiper (".swiper", {
    direction: "horizontal",
    pagination: {
        el: $pagination,
        clickable: true,
        renderBullet: function (idx, className) {
            return '<span class="' + className + '">' + paginationNameArray[idx] + '</span>';
        }
    },
    on: {
        slideChangeTransitionStart: function () {
            console.log("transition start");
        },
        slideChangeTransitionEnd: function() {
            console.log("transition end");
        }
    }
});