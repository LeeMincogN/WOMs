const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var count = 351


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
            like: 33,
            image: './assets/img/imgWOMs/blog1.jpeg',
            title: 'VTV và 10 năm Spacespeakers',
            time: 'November 2, 2021',
            description: '... sai trong quá khứ nhưng không có nghĩa là những thành công, tài năng và sự cố gắng của bạn ở hiện tại bị từ chối. Mình chắc chắn rằng Rhymastic, SS cũng như những nghệ sĩ khác sau chương trình này đều hiểu ra mục đích thực sự mà VTV muốn làm, muốn gửi gắm đến những người làm nghệ thuật, những người có tầm ảnh hưởng ở bất cứ lĩnh vực nào...'
        },
        {
            index: 2,
            like: 22,
            image: './assets/img/imgWOMs/blog2.png',
            title: '',
            time: 'November 11, 2021',
            description: '...  suy nghĩ đó chưa bao giờ xuất hiện trong đầu mình và cho đến giờ cũng vậy. Thực sự đó không phải động lực của mình. Có người làm một cây đàn vô cùng tinh tế và xa xỉ, họ muốn rằng đến khi ai may mắn có được nó thì sẽ rất nâng niu trân trọng nó....'
        },
        {
            index: 3,
            like: 20,
            image: './assets/img/imgWOMs/blog3.png',
            title: '',
            time: 'November 15, 2021',
            description: '...  Mình có đang làm những điều vô ích đối với bản thân hay không?....'
        },
        {
            index: 4,
            like: 23,
            image: './assets/img/imgWOMs/blog4.jpg',
            title: 'Nốt trầm mang tên Phan Văn Đức',
            time: 'November 16, 2021',
            description: '... bóng đá chuyên nghiệp luôn ưu tiên phong độ của cầu thủ. Việc mặc định được ra sân hay mặc định có suất trên ĐTQG, không chỉ khiến triệt tiêu tính cạnh tranh giữa các cầu thủ, mà còn khiến người được ưu ái mất đi động lực để cố gắng.....'
        },
        {
            index: 5,
            like: 42,
            image: './assets/img/imgWOMs/blog5.jpg',
            title: 'E G O',
            time: 'November 22, 2021',
            description: '... 2 khái niệm trong lập trình mình thấy rằng nó cũng giống như đời thực vậy. Sync và Async, đồng bộ và bất đồng bộ. Con người là những cơ thể sống đơn luồng và đồng bộ. Trí tuệ và suy nghĩ của một con người A sẽ là điều kiện....'
        },
        {
            index: 6,
            like: 19,
            image: './assets/img/imgWOMs/blog6.png',
            title: 'Thành viên mới của ngôi nhà chung WOM',
            time: 'December 1, 2021',
            description: '... WOMp3 sẽ không còn là của riêng mình nữa, là của chúng ta, của tất cả mọi người. Hi vọng mọi người hãy vui khi trải nghiệm nó, có những giây phút thư giãn cùng WOMp3, có những đóng góp cho mình để phát triển WOMp3 tốt hơn...'
        },
        {
            index: 7,
            like: -10,
            image: './assets/img/imgWOMs/blog7.png',
            title: 'Exhausting',
            time: 'December 5, 2021',
            description: '... mình vẫn thích ngồi hơn, ngồi xuống, nghỉ ngơi một chút thôi. Ngồi xuống mình vẫn có thể nhìn ngắm quan sát mọi thứ xung quanh xảy ra...'
        },
        {
            index: 8,
            like: -11,
            image: './assets/img/imgWOMs/blog8.png',
            title: 'Mạng xã hội ngày càng độc hại',
            time: 'December 15, 2021',
            description: '...lí do gần đây thời gian mình sử dụng facebook thực sự rất ít, chủ yếu phục vụ cho công việc và cập nhật tin tức từ những trang chính thống thôi. Mình cũng không muốn đọc những loại tin tức gây ức chế hay khó chịu cho bản thân để phải bình luận...'
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
            title: 'Nhìn lại 2021',
            time: 'December 23, 2021',
            description: '...dịch bệnh bao trùm lên mọi thứ và kéo dài trong suốt một năm trời. Năm mà con người ta mất mát đi quá nhiều cả về vật chất, tinh thần...'
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
            title: 'Cập nhật Instagram WOM',
            time: 'January 10, 2022',
            description: '......'
        },
        {
            index: 14,
            like: -170,
            image: './assets/img/imgWOMs/blog14.jpg',
            title: 'Góc chia sẻ',
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
            title: 'Tết!!!',
            time: 'January 31, 2022',
            description: '......'
        },
        {
            index: 18,
            like: -194,
            image: './assets/img/imgWOMs/blog18.jpg',
            title: 'Khai xuân',
            time: 'February 2, 2022',
            description: '......'
        },
        {
            index: 19,
            like: -212,
            image: './assets/img/imgWOMs/blog19.jpg',
            title: 'No Title',
            time: 'February 15, 2022',
            description: '......'
        },
        {
            index: 20,
            like: -269,
            image: './assets/img/imgWOMs/blog20.jpg',
            title: 'A small gift from me for music lovers',
            time: 'February 27, 2022',
            description: '......'
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
