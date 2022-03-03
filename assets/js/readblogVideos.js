const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

    // window.onscroll = function() {myFunction()};
    // function myFunction() {
    //     if (document.body.scrollTop > 4100 || document.documentElement.scrollTop > 4100) {
    //         $(".videoblog1").play();
    //     }
    // }

    var count = 221

//renderBlog 
function opendetail(index) {
    $('.body').style.display = 'none';

    switch (index) {
        case 1:
            $('.blog__detail-1').style.display = 'block';
            $('.musicblog1').play();
            $('.musicblog1').volume = 0.02;
            
            break;
        case 2:
            $('.blog__detail-2').style.display = 'block';
            $('.musicblog2').play();
            $('.musicblog2').volume = 0.02;
            break;
        case 3:
            $('.blog__detail-3').style.display = 'block';
            $('.musicblog3').play();
            $('.musicblog3').volume = 0.02;
            break;
        case 4:
            $('.blog__detail-4').style.display = 'block';
            $('.musicblog4').play();
            $('.musicblog4').volume = 0.02;
            break;
        case 5:
            $('.blog__detail-5').style.display = 'block';
            $('.musicblog5').play();
            $('.musicblog5').volume = 0.02;
            break;
        case 6:
            $('.blog__detail-6').style.display = 'block';
            $('.musicblog6').play();
            $('.musicblog6').volume = 0.02;
            break;
        case 7:
            $('.blog__detail-7').style.display = 'block';
            $('.musicblog7').play();
            $('.musicblog7').volume = 0.02;
            break;
        case 8:
            $('.blog__detail-8').style.display = 'block';
            $('.musicblog8').play();
            $('.musicblog8').volume = 0.02;
            break;
        case 9:
            $('.blog__detail-9').style.display = 'block';
            $('.musicblog9').play();
            $('.musicblog9').volume = 0.02;
            break;
        case 10:
            $('.blog__detail-10').style.display = 'block';
            $('.musicblog10').play();
            $('.musicblog10').volume = 0.02;
            break;
    }
    
}

//
function liked() {
    $('#like1').style.fontWeight = '900';
    $('#like2').style.fontWeight = '900';
    $('#like3').style.fontWeight = '900';
    $('#like4').style.fontWeight = '900';
    $('#like5').style.fontWeight = '900';
    $('#like6').style.fontWeight = '900';
    $('#like7').style.fontWeight = '900';
    $('#like8').style.fontWeight = '900';
    $('#like9').style.fontWeight = '900';
    $('#like10').style.fontWeight = '900';



}

//Đặt text title welcome
$('.header__title-text-name').textContent = '_Cogn</br>'

// Hàm navlist
function navlist_open() {
    $('.navlist').style.display = 'block';
    $('.nav-icon').style.display = 'none';
}

function navlist_close() {
    $('.navlist').style.display = 'none';
    $('.nav-icon').style.display = 'block';
}

//Hàm open form
function form_open() {
    $('.form__user').style.display = 'block';
    $('.form__user-login').style.display = 'block';
}

function form_close() {
    $('.form__user').style.display = 'none';
}

//Hàm form logout 
function form_registeropen() {
    $('.form__user-logout').style.display = 'block';
    $('.form__user-login').style.display = 'none';
}

function form_loginopen() {
    $('.form__user-login').style.display = 'block';
    $('.form__user-logout').style.display = 'none';
}

function form_registerclose() {
    $('.form__user').style.display = 'none';
    $('.form__user-logout').style.display = 'none';
}

function fullscreen() {
    if ($('.videoUpdate').requestFullscreen) {
        $('.videoUpdate').requestFullscreen();
    } else if ($('.videoUpdate').webkitRequestFullscreen) { /* Safari */
        $('.videoUpdate').webkitRequestFullscreen();
    } else if ($('.videoUpdate').msRequestFullscreen) { /* IE11 */
        $('.videoUpdate').msRequestFullscreen();
    }
  }








//render blog

const app = {
    blogs: [
        {
            index: 1,
            like: 55,
            image: './assets/img/imgVideos/blog1.png',
            title: 'Truthy & Falsy',
            time: 'November 6, 2021',
            description: 'Cùng hiểu về khái niệm Truthy và Falsy trong Javascript'
        },
        {
            index: 2,
            like: 49,
            image: './assets/img/imgVideos/blog2.jpg',
            title: 'Hiểu hơn về Function',
            time: 'November 19, 2021',
            description: 'Cùng tìm hiểu về những khái niệm liên quan đến Function'
        },
        {
            index: 3,
            like: -43,
            image: './assets/img/imgVideos/blog3.jpg',
            title: 'Callback?',
            time: 'December 11, 2021',
            description: 'Cùng tìm hiểu về Callback nhé!!!'
        },
        {
            index: 4,
            like: -58,
            image: './assets/img/imgVideos/blog4.jpg',
            title: 'Promise?',
            time: 'December 19, 2021',
            description: 'Cùng tìm hiểu về Promise nhé!!!'
        },
        {
            index: 5,
            like: -70,
            image: './assets/img/imgVideos/blog5.png',
            title: 'Pain?',
            time: 'December 21, 2021',
            description: 'Cùng tìm hiểu về Pain của Callback nhé!!!'
        },
        {
            index: 6,
            like: -89,
            image: './assets/img/imgVideos/blog6.jpg',
            title: 'Promise (Concept)',
            time: 'December 24, 2021',
            description: 'Cùng tìm hiểu về concept của Promise nhé!!!'
        },
        {
            index: 7,
            like: -74,
            image: './assets/img/imgVideos/blog7.png',
            title: 'Promise (Chain)',
            time: 'January 5, 2022',
            description: 'Cùng tìm hiểu về chain của Promise nhé!!!'
        },
        {
            index: 8,
            like: -120,
            image: './assets/img/imgVideos/blog8.png',
            title: 'Hoisting',
            time: 'January 20, 2022',
            description: 'Cùng tìm hiểu về khái niệm hoisting nhé!!!'
        },
        {
            index: 9,
            like: -90,
            image: './assets/img/imgVideos/blog9.jpg',
            title: 'Làm việc với mảng (Phần 1)',
            time: 'February 11, 2022',
            description: 'Cùng thực hành các phương thức làm việc với mảng nhé!!!'
        },
        {
            index: 10,
            like: -123,
            image: './assets/img/imgVideos/blog10.png',
            title: 'Làm việc với mảng (Phần 2)',
            time: 'February 18, 2022',
            description: 'Cùng thực hành các phương thức làm việc với mảng nhé!!!'
        }
    ],
    render: function() {
        const htmls = this.blogs.map(function(blog) {
            return `
                <div class="blog__content-sum">
                    <div class="blog__content-sum-img">
                        <img src="${blog.image}" alt="ảnh cây cối">
                    </div>
                    <div class="blog__content-wrap">
                        <div class="blog__content-sum-title">
                            ${blog.title} <span>${blog.time}</span>
                        </div>
                        <div class="blog__content-sum-des">
                            ${blog.description}
                        </div>
                        <div class="blog__content-sum-footer">
                            <div onclick='opendetail(${blog.index})' class="blog__content-sum-btn">
                                <a href="#">ĐỌC THÊM</a> <span>»</span>
                            </div>
                            <div class="blog__content-sum-cmt">
                            Yêu thích <span><p>${count + blog.like}</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
        $('.blog__content-left').innerHTML = htmls.join('')
    },
    start: function() {
        this.render()
    }
}

app.start()