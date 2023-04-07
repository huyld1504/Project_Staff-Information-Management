/**
 * Hàm dùng để thêm dữ liệu của nhân viên ra trang Web
 * @param {*} arrayStaff một array chứa đựng các object của nhân viên (staff)
 */
function renderStaff (arrayStaff) {
    var htmlStaff = ''
    for (var i=0;i<arrayStaff.length;i++){
        var staff = arrayStaff[i] 
        htmlStaff+= 
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
                <button class="btn btn-success" id="btn_change_staff")">
                    Chinh sua
                </button>
            </td>
        </tr>
        `
        document.querySelector('#tableDanhSach').innerHTML = htmlStaff
    }
}

function saveLocalStorage () {
    var saveArrStaff = JSON.stringify(arrStaff)
    localStorage.setItem('Array Staff',saveArrStaff)
}

/**
 * Hàm dủng để xóa một nhân viên bất kì do sai sót hoặc lỗi
 * @param {*} indexStaff số thứ tự cần xóa
 */
function deleteStaff(indexStaff) {
    arrStaff.splice(indexStaff,1)
    renderStaff(arrStaff)
}



//============================Validation==========================\\

