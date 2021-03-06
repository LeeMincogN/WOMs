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

//?????t text title welcome
$('.header__title-text-name').textContent = '_Cogn</br>'

// H??m navlist
function navlist_open() {
    $('.navlist').style.display = 'block';
    $('.nav-icon').style.display = 'none';
}

function navlist_close() {
    $('.navlist').style.display = 'none';
    $('.nav-icon').style.display = 'block';
}

//H??m open form
function form_open() {
    $('.form__user').style.display = 'block';
    $('.form__user-login').style.display = 'block';
}

function form_close() {
    $('.form__user').style.display = 'none';
}

//H??m form logout 
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
//H??m fullscreen

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
            title: 'Q&A s??? 1: T??? h???c l???p tr??nh hay h???c t???i trung t??m?',
            time: 'November 25, 2021',
            description: '...vi???c t??? h???c, c??n h???c ??? trung t??m th?? c?? ??i???m g?? kh??c. ??????ng nhi??n r???i, h???c ??? trung t??m ch??ng ta s??? c?? m???t l??? tr??nh chi ti???t v?? b??i b???n v??? chuy??n ng??nh m?? ch??ng ta mu???n theo ??u???i trong l??nh v???c IT...'
        },
        {
            index: 2,
            like: 36,
            image: './assets/img/imgQA/blog2.png',
            title: 'Q&A s??? 2: C?? n??n mua Macbook ho???c LaptopGaming ????? h???c l???p tr??nh?',
            time: 'November 28, 2021',
            description: '...ng??nh IT, designer v?? m???t s??? ??t ng??nh ?????c th?? kh??c. Ch??ng ta s??? ph???i l??m vi???c, thao t??c tr??n nh???ng c??ng c??? ????n lu???ng v?? ??a lu???ng c?? ????? ph???c t???p l???n, hi???u n??ng s??? d???ng l???n, chi???m d???ng CPU cao, t???c ????? x??? l?? l???n. ...'
        },
        {
            index: 3,
            like: -31,
            image: './assets/img/imgQA/blog3.png',
            title: 'Q&A s??? 3: "Promise" v??? m???t b??i h???c th?? v???',
            time: 'December 9, 2021',
            description: ''
        },
        {
            index: 4,
            like: -46,
            image: './assets/img/imgQA/blog4.png',
            title: 'Q&A s??? 4: MobileFirst...?',
            time: 'December 18, 2021',
            description: ''
        },
        {
            index: 5,
            like: -60,
            image: './assets/img/imgQA/blog5.png',
            title: 'Q&A s??? 5: L??? tr??nh h???c t???p...?',
            time: 'December 25, 2021',
            description: ''
        },
        {
            index: 6,
            like: -42,
            image: './assets/img/imgQA/blog6.png',
            title: 'Q&A s??? 6',
            time: 'January 2, 2022',
            description: ''
        },
        {
            index: 7,
            like: -89,
            image: './assets/img/imgQA/blog7.png',
            title: 'Q&A s??? 7',
            time: 'January 11, 2022',
            description: ''
        },
        {
            index: 8,
            like: -120,
            image: './assets/img/imgQA/blog8.png',
            title: 'Q&A s??? 8',
            time: 'January 15, 2022',
            description: ''
        }
    ],
    render: function() {
        const htmls = this.blogs.map(function(blog) {
            return `
                <div class="blog__content-sum">
                    <div class="blog__content-sum-img">
                        <img src="${blog.image}" alt="???nh c??y c???i">
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
                                <a href="#">?????C TH??M</a> <span>??</span>
                            </div>
                            <div class="blog__content-sum-cmt">
                                Y??u th??ch  <span><p>${count + blog.like}</p></span>
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
