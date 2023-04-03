function StaffManagement() {
    this.account ='',
    this.fullName = '',
    this.email='',
    this.password = '',
    this.hourWork = 0,
    this.positionWork = '',
    this.salarySimple=0,
    this.salary = function() {
        var salary = 0
        if (this.positionWork ==='Sep') {
            salary = this.salarySimple*3
        } else if (this.positionWork === 'Truong phong') {
            salary = this.salarySimple*2
        } else {
            salary = this.salarySimple
        }
        return salary
    },
    this.rankWork = '',
    this.findStaff = function() {
        htmlOutput = ''
        if (this.hourWork < 160) {
            htmlOutput = 'Nhân viên trung bình'
        } else if (this.hourWork>= 160 && this.hourWork < 176 ) {
            htmlOutput = 'Nhân viên Khá'
        } else if (this.hourWork >= 176 && this.hourWork< 192) {
            htmlOutput = 'Nhân viên giỏi'
        } else {
            htmlOutput = 'Nhân viên xuất sắc'
        }
        return htmlOutput
    },
    this.day = ''
}