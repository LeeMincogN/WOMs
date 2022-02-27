const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var count = 170


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
//Hàm fullscreen

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
            like: 45,
            image: './assets/img/imgQA/blog1.png',
            title: 'Q&A số 1: Tự học lập trình hay học tại trung tâm?',
            time: 'November 25, 2021',
            description: '...việc tự học, còn học ở trung tâm thì có điểm gì khác. Đương nhiên rồi, học ở trung tâm chúng ta sẽ có một lộ trình chi tiết và bài bản về chuyên ngành mà chúng ta muốn theo đuổi trong lĩnh vực IT...'
        },
        {
            index: 2,
            like: 36,
            image: './assets/img/imgQA/blog2.png',
            title: 'Q&A số 2: Có nên mua Macbook hoặc LaptopGaming để học lập trình?',
            time: 'November 28, 2021',
            description: '...ngành IT, designer và một số ít ngành đặc thù khác. Chúng ta sẽ phải làm việc, thao tác trên những công cụ đơn luồng và đa luồng có độ phức tạp lớn, hiệu năng sử dụng lớn, chiếm dụng CPU cao, tốc độ xử lí lớn. ...'
        },
        {
            index: 3,
            like: -31,
            image: './assets/img/imgQA/blog3.png',
            title: 'Q&A số 3: "Promise" về một bài học thú vị',
            time: 'December 9, 2021',
            description: ''
        },
        {
            index: 4,
            like: -46,
            image: './assets/img/imgQA/blog4.png',
            title: 'Q&A số 4: MobileFirst...?',
            time: 'December 18, 2021',
            description: ''
        },
        {
            index: 5,
            like: -60,
            image: './assets/img/imgQA/blog5.png',
            title: 'Q&A số 5: Lộ trình học tập...?',
            time: 'December 25, 2021',
            description: ''
        },
        {
            index: 6,
            like: -42,
            image: './assets/img/imgQA/blog6.png',
            title: 'Q&A số 6',
            time: 'January 2, 2022',
            description: ''
        },
        {
            index: 7,
            like: -89,
            image: './assets/img/imgQA/blog7.png',
            title: 'Q&A số 7',
            time: 'January 11, 2022',
            description: ''
        },
        {
            index: 8,
            like: -120,
            image: './assets/img/imgQA/blog8.png',
            title: 'Q&A số 8',
            time: 'January 15, 2022',
            description: ''
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
                                Yêu thích  <span><p>${count + blog.like}</p></span>
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
