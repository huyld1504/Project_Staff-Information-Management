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

    var validation = true
}
// document.querySelector('#btn_change_staff').onclick = function {
//     if (9) {
        
//     }
// }
document.querySelector('#btnCapNhat').onclick = function () {
    var staffChange = new StaffManagement()
    staffChange.account = document.querySelector('#tknv').value
    staffChange.fullName = document.querySelector('#name').value
    staffChange.email = document.querySelector('#email').value
    staffChange.password = document.querySelector('#password').value
    staffChange.day = document.querySelector('#datepicker').value
    staffChange.salarySimple = +document.querySelector('#luongCB').value
    staffChange.positionWork = document.querySelector('#chucvu').value
    staffChange.hourWork = +document.querySelector('#gioLam').value
    console.log(staffChange)
    for (var i = 0; i < arrStaff.length; i++) {
        if (arrStaff[i].fullName === staffChange.fullName) {
            staffChange.account = arrStaff[i].account
            staffChange.fullName = arrStaff[i].fullName
            staffChange.email = arrStaff[i].email
            staffChange.password = arrStaff[i].password
            staffChange.day = arrStaff[i].day
            staffChange.salarySimple = arrStaff[i].salarySimple
            staffChange.positionWork = arrStaff[i].positionWork
            staffChange.hourWork = arrStaff[i].hourWork
        }
        break
    }
    renderStaff(arrStaff)
}
