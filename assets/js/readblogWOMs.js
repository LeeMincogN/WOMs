const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var count = 410


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
        case 21:
            $('.blog__detail-21').style.display = 'block';
            $('.musicblog21').play();
            $('.musicblog21').volume = 0.02;
            break;
        case 22:
            $('.blog__detail-22').style.display = 'block';
            $('.musicblog22').play();
            $('.musicblog22').volume = 0.02;
            break;
        case 23:
            $('.blog__detail-23').style.display = 'block';
            $('.musicblog23').play();
            $('.musicblog23').volume = 0.02;
            break;
        case 24:
            $('.blog__detail-24').style.display = 'block';
            $('.musicblog24').play();
            $('.musicblog24').volume = 0.02;
            break;
        case 25:
            $('.blog__detail-25').style.display = 'block';
            $('.musicblog25').play();
            $('.musicblog25').volume = 0.02;
            break;
        case 26:
            $('.blog__detail-26').style.display = 'block';
            $('.musicblog26').play();
            $('.musicblog26').volume = 0.02;
            break;
        case 27:
            $('.blog__detail-27').style.display = 'block';
            $('.musicblog27').play();
            $('.musicblog27').volume = 0.02;
            break;
        case 28:
            $('.blog__detail-28').style.display = 'block';
            $('.musicblog28').play();
            $('.musicblog28').volume = 0.02;
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
    $('#like21').style.fontWeight = '900';
    $('#like22').style.fontWeight = '900';
    $('#like23').style.fontWeight = '900';
    $('#like24').style.fontWeight = '900';
    $('#like25').style.fontWeight = '900';
    $('#like26').style.fontWeight = '900';
    $('#like27').style.fontWeight = '900';
    $('#like28').style.fontWeight = '900';



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
            like: 33,
            image: './assets/img/imgWOMs/blog1.jpeg',
            title: 'VTV v?? 10 n??m Spacespeakers',
            time: 'November 2, 2021',
            description: '... sai trong qu?? kh??? nh??ng kh??ng c?? ngh??a l?? nh???ng th??nh c??ng, t??i n??ng v?? s??? c??? g???ng c???a b???n ??? hi???n t???i b??? t??? ch???i. M??nh ch???c ch???n r???ng Rhymastic, SS c??ng nh?? nh???ng ngh??? s?? kh??c sau ch????ng tr??nh n??y ?????u hi???u ra m???c ????ch th???c s??? m?? VTV mu???n l??m, mu???n g???i g???m ?????n nh???ng ng?????i l??m ngh??? thu???t, nh???ng ng?????i c?? t???m ???nh h?????ng ??? b???t c??? l??nh v???c n??o...'
        },
        {
            index: 2,
            like: 22,
            image: './assets/img/imgWOMs/blog2.png',
            title: '',
            time: 'November 11, 2021',
            description: '...  suy ngh?? ???? ch??a bao gi??? xu???t hi???n trong ?????u m??nh v?? cho ?????n gi??? c??ng v???y. Th???c s??? ???? kh??ng ph???i ?????ng l???c c???a m??nh. C?? ng?????i l??m m???t c??y ????n v?? c??ng tinh t??? v?? xa x???, h??? mu???n r???ng ?????n khi ai may m???n c?? ???????c n?? th?? s??? r???t n??ng niu tr??n tr???ng n??....'
        },
        {
            index: 3,
            like: 20,
            image: './assets/img/imgWOMs/blog3.png',
            title: '',
            time: 'November 15, 2021',
            description: '...  M??nh c?? ??ang l??m nh???ng ??i???u v?? ??ch ?????i v???i b???n th??n hay kh??ng?....'
        },
        {
            index: 4,
            like: 23,
            image: './assets/img/imgWOMs/blog4.jpg',
            title: 'N???t tr???m mang t??n Phan V??n ?????c',
            time: 'November 16, 2021',
            description: '... b??ng ???? chuy??n nghi???p lu??n ??u ti??n phong ????? c???a c???u th???. Vi???c m???c ?????nh ???????c ra s??n hay m???c ?????nh c?? su???t tr??n ??TQG, kh??ng ch??? khi???n tri???t ti??u t??nh c???nh tranh gi???a c??c c???u th???, m?? c??n khi???n ng?????i ???????c ??u ??i m???t ??i ?????ng l???c ????? c??? g???ng.....'
        },
        {
            index: 5,
            like: 42,
            image: './assets/img/imgWOMs/blog5.jpg',
            title: 'E G O',
            time: 'November 22, 2021',
            description: '... 2 kh??i ni???m trong l???p tr??nh m??nh th???y r???ng n?? c??ng gi???ng nh?? ?????i th???c v???y. Sync v?? Async, ?????ng b??? v?? b???t ?????ng b???. Con ng?????i l?? nh???ng c?? th??? s???ng ????n lu???ng v?? ?????ng b???. Tr?? tu??? v?? suy ngh?? c???a m???t con ng?????i A s??? l?? ??i???u ki???n....'
        },
        {
            index: 6,
            like: 19,
            image: './assets/img/imgWOMs/blog6.png',
            title: 'Th??nh vi??n m???i c???a ng??i nh?? chung WOM',
            time: 'December 1, 2021',
            description: '... WOMp3 s??? kh??ng c??n l?? c???a ri??ng m??nh n???a, l?? c???a ch??ng ta, c???a t???t c??? m???i ng?????i. Hi v???ng m???i ng?????i h??y vui khi tr???i nghi???m n??, c?? nh???ng gi??y ph??t th?? gi??n c??ng WOMp3, c?? nh???ng ????ng g??p cho m??nh ????? ph??t tri???n WOMp3 t???t h??n...'
        },
        {
            index: 7,
            like: -10,
            image: './assets/img/imgWOMs/blog7.png',
            title: 'Exhausting',
            time: 'December 5, 2021',
            description: '... m??nh v???n th??ch ng???i h??n, ng???i xu???ng, ngh??? ng??i m???t ch??t th??i. Ng???i xu???ng m??nh v???n c?? th??? nh??n ng???m quan s??t m???i th??? xung quanh x???y ra...'
        },
        {
            index: 8,
            like: -11,
            image: './assets/img/imgWOMs/blog8.png',
            title: 'M???ng x?? h???i ng??y c??ng ?????c h???i',
            time: 'December 15, 2021',
            description: '...l?? do g???n ????y th???i gian m??nh s??? d???ng facebook th???c s??? r???t ??t, ch??? y???u ph???c v??? cho c??ng vi???c v?? c???p nh???t tin t???c t??? nh???ng trang ch??nh th???ng th??i. M??nh c??ng kh??ng mu???n ?????c nh???ng lo???i tin t???c g??y ???c ch??? hay kh?? ch???u cho b???n th??n ????? ph???i b??nh lu???n...'
        },
        {
            index: 9,
            like: -25,
            image: './assets/img/imgWOMs/blog9.png',
            title: 'App Music',
            time: 'December 18, 2021',
            description: '......'
        },
        {
            index: 10,
            like: -50,
            image: './assets/img/imgWOMs/blog10.jpg',
            title: 'Nh??n l???i 2021',
            time: 'December 23, 2021',
            description: '...d???ch b???nh bao tr??m l??n m???i th??? v?? k??o d??i trong su???t m???t n??m tr???i. N??m m?? con ng?????i ta m???t m??t ??i qu?? nhi???u c??? v??? v???t ch???t, tinh th???n...'
        },
        {
            index: 11,
            like: -80,
            image: './assets/img/imgWOMs/blog11.png',
            title: 'Merry Christmas',
            time: 'December 26, 2021',
            description: '......'
        },
        {
            index: 12,
            like: -63,
            image: './assets/img/imgWOMs/blog12.png',
            title: 'Happy New Year',
            time: 'January 1, 2022',
            description: '......'
        },
        {
            index: 13,
            like: -120,
            image: './assets/img/imgWOMs/blog13.png',
            title: 'C???p nh???t Instagram WOM',
            time: 'January 10, 2022',
            description: '......'
        },
        {
            index: 14,
            like: -170,
            image: './assets/img/imgWOMs/blog14.jpg',
            title: 'G??c chia s???',
            time: 'January 13, 2022',
            descripion: '......'
        },
        {
            index: 15,
            like: -194,
            image: './assets/img/imgWOMs/blog15.png',
            title: 'Review Film',
            time: 'January 17, 2022',
            description: '......'
        },
        {
            index: 16,
            like: -196,
            image: './assets/img/imgWOMs/blog16.jpg',
            title: 'Notify',
            time: 'January 29, 2022',
            description: '......'
        },
        {
            index: 17,
            like: -185,
            image: './assets/img/imgWOMs/blog17.png',
            title: 'T???t!!!',
            time: 'January 31, 2022',
            description: '......'
        },
        {
            index: 18,
            like: -194,
            image: './assets/img/imgWOMs/blog18.jpg',
            title: 'Khai xu??n',
            time: 'February 2, 2022',
            description: '......'
        },
        {
            index: 19,
            like: -156,
            image: './assets/img/imgWOMs/blog19.jpg',
            title: 'No Title',
            time: 'February 15, 2022',
            description: '......'
        },
        {
            index: 20,
            like: -191,
            image: './assets/img/imgWOMs/blog20.jpg',
            title: 'A small gift from me for music lovers',
            time: 'February 27, 2022',
            description: '......'
        },
        {
            index: 21,
            like: -224,
            image: './assets/img/imgWOMs/blog21.png',
            title: 'Good web icon for FE',
            time: 'March 6, 2022',
            description: '......'
        },
        {
            index: 22,
            like: -200,
            image: './assets/img/imgWOMs/blog22.jpg',
            title: 'Happy birthday to me',
            time: 'March 10, 2022',
            description: '......'
        },
        {
            index: 23,
            like: -241,
            image: './assets/img/imgWOMs/blog23.jpg',
            title: 'L???n ?????u l??m F0...',
            time: 'March 21, 2022',
            description: '......'
        },
        {
            index: 24,
            like: -267,
            image: './assets/img/imgWOMs/blog24.jpg',
            title: 'Ch??nh th???c...',
            time: 'March 25, 2022',
            description: '......'
        },
        {
            index: 25,
            like: -276,
            image: './assets/img/imgWOMs/blog25.png',
            title: 'Ch??nh th???c...',
            time: 'March 28, 2022',
            description: '......'
        },
        {
            index: 26,
            like: -241,
            image: './assets/img/imgWOMs/blog26.jpg',
            title: 'N???i bu???n th???t trong ng??y n??i d???i',
            time: 'April 2, 2022',
            description: '......'
        },
        {
            index: 27,
            like: -300,
            image: './assets/img/imgWOMs/blog27.jpg',
            title: 'Comebackk!!!',
            time: 'April 27, 2022',
            description: '......'
        },
        {
            index: 28,
            like: -350,
            image: './assets/img/imgWOMs/blog28.jpg',
            title: 'Delayyy!!!',
            time: 'March 13, 2022',
            description: '......'
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
