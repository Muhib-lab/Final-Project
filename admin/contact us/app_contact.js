var dataParent = document.getElementById('student_Data')
var arr = []

function getData(){

    
    firebase.database().ref('/').child('contactUsData').on('child_added', function (data) {
        arr.push(data.val())
        dataParent.innerHTML= ''
        for(var i=0; i<arr.length; i++){    
            dataParent.innerHTML += ` <tr>
            <td>${arr[i].student_Name}</td>
           
            <td>${arr[i].phone_Number}</td>
            <td>${arr[i].full_address}</td>
            <td>${arr[i].studentClass}</td>
            <td>${arr[i].stdQuery}</td>
          </tr>`
        }
    })
    console.log(arr)
}
getData()