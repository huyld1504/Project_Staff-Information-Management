
//Save information into the Local Storage
function saveLocalStorage () {
    var saveArrStaff = JSON.stringify(arrStaff)
    localStorage.setItem('Array Staff',saveArrStaff)
}

//Get information into Local Storage and print it to the screen 
/*
{function getLocalStorage () {
   if (localStorage.getItem('arrStaff')) {
    var getLocalStorage = JSON.getItem('arrSatff')
   }
   arrStaff=JSON.parse('getLocalStorage')
}}
*/

function stringToSlug(title) {
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');

    return slug;
}


// function checkEmpty (value, name, string) {
//     if (value.trim() === '') {
//         document.querySelector(`#error_required_${name}`).innerHTML = `${string} không được bỏ trống`
//         return false
//     } else {
//         document.querySelector(`#error_required_${name}`).innerHTML = ``
//         return true
//     }
// }

// function checkEmail(value, name, string) {
//     var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
//     if (mailformat.test(value)) {
//         document.querySelector(`#error_required_${name}`).innerHTML = ``
//         return true
//     } else {
//         document.querySelector(`#error_required_${name}`).innerHTML = `${string} không hợp lệ !!!`
//         return false
//     }
// }

// function checkNumber(value, name, string) {
//     var numberFormat = /^[0-9]+$/;
//     if (numberFormat.test(value)) {
//         document.querySelector(`#error_required_${name}`).innerHTML = ``
//         return true
//     } else {
//         document.querySelector(`#error_required_${name}`).innerHTML = `${string} không hợp lệ !!!`
//         return false
//     }
// }

// function checkLetter(value, name, string) {
//     var letterFormat = /^[A-Za-z]+$/;
//     if (letterFormat.test(value)) {
//         document.querySelector(`#error_required_${name}`).innerHTML = ``
//         return true
//     } else {
//         document.querySelector(`#error_required_${name}`).innerHTML = `${string} không hợp lệ !!!`
//         return false
//     }
// }

// function checkDistance(value, name, minLength, maxLength) {
//     if (value.trim().length < minLength || value.trim().length > maxLength) {
//         document.querySelector(`error_required_${name}`).innerHTML = `${name} trong khoảng từ ${minLength} đến ${maxLength} !!!`
//         return false
//     } else {
//         document.querySelector(`error_required_${name}`).innerHTML = ``
//         return true
//     }
// }






