
//Save information into the Local Storage
function saveLocalStorage () {
    var saveArrStaff = JSON.stringify(arrStaff)
    localStorage.setItem('Array Staff',saveArrStaff)
}

//Get information into Local Storage and print it to the screen 
function getLocalStorage () {
   if (localStorage.getItem('arrStaff')) {
    var getLocalStorage = JSON.getItem('arrSatff')
   }
   arrStaff=JSON.parse('getLocalStorage')
}

//Check the entrance of the information 




