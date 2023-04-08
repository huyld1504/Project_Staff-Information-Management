var arrStaff = []

document.querySelector('#myModal').onsubmit = function (event) {
    event.preventDefault()
    //console.log(123)
    var staff = new StaffManagement()
    staff.account = document.querySelector('#tknv').value
    staff.fullName = document.querySelector('#name').value
    staff.email = document.querySelector('#email').value
    staff.password = document.querySelector('#password').value
    staff.day = document.querySelector('#datepicker').value
    staff.salarySimple = +document.querySelector('#luongCB').value
    staff.positionWork = document.querySelector('#chucvu').value
    staff.hourWork = +document.querySelector('#gioLam').value

    // console.log(staff)
    arrStaff.push(staff)
    saveLocalStorage()
    console.log('array Staff', arrStaff)
    renderStaff(arrStaff)
    

}

document.querySelector('#btnCapNhat').onclick = function () {
    var updateStaff = new StaffManagement()
    updateStaff.account = document.querySelector('#tknv').value
    updateStaff.fullName = document.querySelector('#name').value
    updateStaff.email = document.querySelector('#email').value
    updateStaff.password = document.querySelector('#password').value
    updateStaff.day = document.querySelector('#datepicker').value
    updateStaff.salarySimple = +document.querySelector('#luongCB').value
    updateStaff.positionWork = document.querySelector('#chucvu').value
    updateStaff.hourWork = +document.querySelector('#gioLam').value
    var updateIndex = -1
    for (var i = 0; i < arrStaff.length; i++) {
        if (arrStaff[i].account = updateStaff.account) {
            updateIndex = i
        }
    }
    if (updateIndex != -1) {
        arrStaff[updateIndex].account = updateStaff.account
        arrStaff[updateIndex].fullName = updateStaff.fullName
        arrStaff[updateIndex].email = updateStaff.email
        arrStaff[updateIndex].password = updateStaff.password
        arrStaff[updateIndex].day = updateStaff.day
        arrStaff[updateIndex].salarySimple = updateStaff.salarySimple
        arrStaff[updateIndex].positionWork = updateStaff.positionWork
        arrStaff[updateIndex].hourWork = updateStaff.hourWork
    }
    renderStaff(arrStaff)
    saveLocalStorage()
    document.querySelector('#tknv').disabled = false
    document.querySelector('#myModal').reset()
}




getLocalStorage()


/**
 * Hàm dùng để thêm dữ liệu của nhân viên ra trang Web
 * @param {*} arrayStaff một array chứa đựng các object của nhân viên (staff)
 */
function renderStaff(arrayStaff) {
    var htmlStaff = ''
    for (var i = 0; i < arrayStaff.length; i++) {
        var staff = arrayStaff[i]
        htmlStaff +=
            `
        <tr>
            <td>${staff.account}</td>
            <td>${staff.fullName}</td>
            <td>${staff.email}</td>
            <td>${staff.day}</td>
            <td>${staff.positionWork}</td>
            <td>${staff.salary()}</td>
            <td>${staff.rankWork()}</td>
            <td>
                <button class="btn btn-danger" id="btn_delete_staff" onclick="deleteStaff('${i}')">X</button>
                <button class="btn btn-success" id="btn_change_staff")" onclick="fixStaff('${staff.account}')">
                    Chinh sua
                </button>
            </td>
        </tr>
        `
        document.querySelector('#tableDanhSach').innerHTML = htmlStaff
        saveLocalStorage()
    }
}


/**
 * Hàm dủng để xóa một nhân viên bất kì do sai sót hoặc lỗi
 * @param {*} indexStaff số thứ tự cần xóa
 */
function deleteStaff(indexStaff) {
    arrStaff.splice(indexStaff, 1)
    renderStaff(arrStaff)
}

function fixStaff(account) {
    var indexFix = -1
    for (var i = 0; i < arrStaff.length; i++) {
        if (arrStaff[i].account === account) {
            indexFix = i
        }
    }
    if (indexFix != -1) {
        document.querySelector('#tknv').value = arrStaff[indexFix].account
        document.querySelector('#name').value = arrStaff[indexFix].fullName
        document.querySelector('#email').value = arrStaff[indexFix].email
        document.querySelector('#password').value = arrStaff[indexFix].password
        document.querySelector('#datepicker').value = arrStaff[indexFix].day
        document.querySelector('#luongCB').value = arrStaff[indexFix].salarySimple
        document.querySelector('#chucvu').value = arrStaff[indexFix].positionWork
        document.querySelector('#gioLam').value = arrStaff[indexFix].hourWork
    }
    document.querySelector('#tknv').disabled = true
}
