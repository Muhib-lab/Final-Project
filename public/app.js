function getdirection(){
    window.open ("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.6144027059045!2d67.05713241500516!3d24.979230583998085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU4JzQ1LjIiTiA2N8KwMDMnMzMuNiJF!5e0!3m2!1sen!2s!4v1630737794645!5m2!1sen!2s",
    "win1","width:420,height:380")
}

function getAdmission(){
    window.open('admission.html')
}






//.............for student database

var form = document.getElementById('form')

function register() {
    
    var model = {}
    
    model.stdName = document.getElementById('stdName').value
    model.fName = document.getElementById('fName').value
    model.phoneNum = document.getElementById('phoneNum').value
    model.address = document.getElementById('address').value
    model.stdClass = document.getElementById('stdClass').value
    model.stdGender = document.getElementById('stdGender').value


    console.log(model)

     firebase.database().ref('/').child('studentData').push(model)
    alert('your form is submit please reload the page')
}

//.........................................for query database .....


function contact_func(){
    var contact_model= {}

    contact_model.student_Name = document.getElementById('student_Name').value
    contact_model.father_Name = document.getElementById('father_Name').value
    contact_model.phone_Number = document.getElementById('phone_Number').value
    contact_model.full_address = document.getElementById('full_address').value
    contact_model.studentClass = document.getElementById('studentClass').value
    contact_model.stdQuery = document.getElementById('stdQuery').value

    console.log(contact_model)

    firebase.database().ref('/').child('contactUsData').push(contact_model)
    alert('Your query is submit. Please reload the page')
}