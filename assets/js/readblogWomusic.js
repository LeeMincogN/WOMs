const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

    // window.onscroll = function() {myFunction()};
    // function myFunction() {
    //     if (document.body.scrollTop > 4100 || document.documentElement.scrollTop > 4100) {
    //         $(".videoblog1").play();
    //     }
    // }

    var count = 330

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
        case 11:
            $('.blog__detail-11').style.display = 'block';
            $('.musicblog11').play();
            $('.musicblog11').volume = 0.02;
            break;
        case 12:
            $('.blog__detail-12').style.display = 'block';
            $('.musicblog12').play();
            $('.musicblog12').volume = 0.02;
            break;
        case 13:
            $('.blog__detail-13').style.display = 'block';
            $('.musicblog13').play();
            $('.musicblog13').volume = 0.02;
            break;
        case 14:
            $('.blog__detail-14').style.display = 'block';
            $('.musicblog14').play();
            $('.musicblog14').volume = 0.02;
            break;
        case 15:
            $('.blog__detail-15').style.display = 'block';
            $('.musicblog15').play();
            $('.musicblog15').volume = 0.02;
            break;
        case 16:
            $('.blog__detail-16').style.display = 'block';
            $('.musicblog16').play();
            $('.musicblog16').volume = 0.02;
            break;
        case 17:
            $('.blog__detail-17').style.display = 'block';
            $('.musicblog17').play();
            $('.musicblog17').volume = 0.02;
            break;
        case 18:
            $('.blog__detail-18').style.display = 'block';
            $('.musicblog18').play();
            $('.musicblog18').volume = 0.02;
            break;
        case 19:
            $('.blog__detail-19').style.display = 'block';
            $('.musicblog19').play();
            $('.musicblog19').volume = 0.02;
            break;
        case 20:
            $('.blog__detail-20').style.display = 'block';
            $('.musicblog20').play();
            $('.musicblog20').volume = 0.02;
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
    $('#like11').style.fontWeight = '900';
    $('#like12').style.fontWeight = '900';
    $('#like13').style.fontWeight = '900';
    $('#like14').style.fontWeight = '900';
    $('#like15').style.fontWeight = '900';
    $('#like16').style.fontWeight = '900';
    $('#like17').style.fontWeight = '900';
    $('#like18').style.fontWeight = '900';
    $('#like19').style.fontWeight = '900';
    $('#like20').style.fontWeight = '900';



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
            like: 197,
            image: './assets/img/imgWomusic/blog1.jpg',
            title: 'HLC',
            time: 'January 25, 2022',
            description: ''
        },
        {
            index: 2,
            like: 136,
            image: './assets/img/imgWomusic/blog2.jpg',
            title: 'CTCNTA',
            time: 'January 28, 2022',
            description: ''
        },
        {
            index: 3,
            like: 94,
            image: './assets/img/imgWomusic/blog3.jpg',
            title: 'BQMCĐ',
            time: 'February 1, 2022',
            description: ''
        },
        {
            index: 4,
            like: 51,
            image: './assets/img/imgWomusic/blog4.jpg',
            title: 'Mashup1',
            time: 'February 5, 2022',
            description: ''
        },
        {
            index: 5,
            like: 32,
            image: './assets/img/imgWomusic/blog5.jpg',
            title: 'CR',
            time: 'February 7, 2022',
            description: ''
        },
        {
            index: 6,
            like:  45,
            image: './assets/img/imgWomusic/blog6.jpg',
            title: 'HNKM',
            time: 'February 10, 2022',
            description: ''
        },
        {
            index: 7,
            like: -11,
            image: './assets/img/imgWomusic/blog7.jpg',
            title: 'HongKong1',
            time: 'February 12, 2022',
            description: ''
        },
        {
            index: 8,
            like: -51,
            image: './assets/img/imgWomusic/blog8.jpg',
            title: 'N-G-A-N',
            time: 'February 17, 2022',
            description: ''
        },
        {
            index: 9,
            like: -43,
            image: './assets/img/imgWomusic/blog9.jpg',
            title: '3107-123',
            time: 'February 20, 2022',
            description: ''
        },
        {
            index: 10,
            like: -94,
            image: './assets/img/imgWomusic/blog10.jpg',
            title: 'YĐKQTCVKVA',
            time: 'February 23, 2022',
            description: ''
        },
        {
            index: 11,
            like: -52,
            image: './assets/img/imgWomusic/blog11.jpg',
            title: 'ĐVAMK',
            time: 'February 25, 2022',
            description: ''
        },
        {
            index: 12,
            like: -120,
            image: './assets/img/imgWomusic/blog12.jpg',
            title: 'hennessy (acoustic ver.)',
            time: 'March 3, 2022',
            description: ''
        },
        {
            index: 13,
            like: -100,
            image: './assets/img/imgWomusic/blog13.jpg',
            title: 'nmyccđym (short ver.)',
            time: 'March 8, 2022',
            description: ''
        },
        {
            index: 14,
            like: -161,
            image: './assets/img/imgWomusic/blog14.jpg',
            title: 'TELĐAKTN',
            time: 'March 12, 2022',
            description: ''
        },
        {
            index: 15,
            like: -89,
            image: './assets/img/imgWomusic/blog15.jpg',
            title: 'Chimsauu (acoustic ver.)',
            time: 'March 15, 2022',
            description: ''
        },
        {
            index: 16,
            like: -111,
            image: './assets/img/imgWomusic/blog16.jpg',
            title: 'Vương (acoustic ver.)',
            time: 'March 17, 2022',
            description: ''
        },
        {
            index: 17,
            like: -154,
            image: './assets/img/imgWomusic/blog17.jpg',
            title: 'khicodonemnhoai (acoustic ver.)',
            time: 'March 20, 2022',
            description: ''
        },
        {
            index: 18,
            like: -141,
            image: './assets/img/imgWomusic/blog18.jpg',
            title: 'anhdaquenobencanhem (acoustic ver.)',
            time: 'March 22, 2022',
            description: ''
        },
        {
            index: 19,
            like: -200,
            image: './assets/img/imgWomusic/blog19.jpg',
            title: 'Mặt trời của em (short ver.)',
            time: 'April 7, 2022',
            description: ''
        },
        {
            index: 20,
            like: -301,
            image: './assets/img/imgWomusic/blog20.jpg',
            title: 'Hạnh phúc mới (short ver.)',
            time: 'April 18, 2022',
            description: ''
        },
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