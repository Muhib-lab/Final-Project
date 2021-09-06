var dataParent = document.getElementById('stdData')
var arr = []

function getData(){

    
    firebase.database().ref('/').child('studentData').on('child_added', function (data) {
        arr.push(data.val())
        dataParent.innerHTML= ''
        for(var i=0; i<arr.length; i++){    
            dataParent.innerHTML += ` <tr>
            <td>${arr[i].stdName}</td>
            <td>${arr[i].fName}</td>
            <td>${arr[i].phoneNum}</td>
            <td>${arr[i].address}</td>
            <td>${arr[i].stdClass}</td>
            <td>${arr[i].stdGender}</td>
          </tr>`
        }
    })
    console.log(arr)
}
getData()