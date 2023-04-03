document.querySelector('#myModal').onsubmit = function (event) {
    event.preventDefault()
    console.log(123)

    var staff = new StaffManagement() 
    staff.account = document.querySelector('#tknv').value
    staff.fullName = document.querySelector('#name').value
    staff.email = document.querySelector('#email').value
    staff.password = document.querySelector('#password').value
    staff.dAY
}