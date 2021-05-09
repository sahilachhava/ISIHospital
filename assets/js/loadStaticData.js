var dataStatus = localStorage.getItem('hasDataLoaded');

if(dataStatus != 1){
    localStorage.setItem('hasDataLoaded', '1');
    //Loading Doctors Data

    //Doctor Names
    var docName = new Array("Dr. Sahil Achhava", "Dr. Pargol", "Dr. Sruthi", "Dr. Harshil Patel", 
    "Dr. Namita Bhoj", "Dr. Nirav", "Dr. Dhruv Shah", "Dr. Harpreet Kaur", "Dr. Anmol Kaur");
    localStorage.setItem('docName', docName);

    //Doctor Specialities
    var docSpeciality = new Array("Neurology", "Ophthalmology", "Gynaecology", "Orthopaedics", 
    "Eye Expert", "Cardiology", "Medicne", "Dental Consult", "Hepatology");
    localStorage.setItem('docSpeciality', docSpeciality);

    //Doctor Usernames
    var docUsername = new Array("sahil@isi.com", "pargol@isi.com", "sruthi@isi.com", "harshil@isi.com",
    "namita@isi.com", "nirav@isi.com", "dhruv@isi.com", "harpreet@isi.com", "anmol@isi.com");
    localStorage.setItem('docUsername', docUsername);

    //Doctor Passwords
    var docPassword = new Array("12345", "12345", "12345", "12345", "12345", "12345", "12345", "12345", "12345");
    localStorage.setItem('docPassword', docPassword);


    //Loading Patient Data

    //Patient First Name
    var patientFName = new Array("Vijeta", "Yagnesh", "Harman");
    localStorage.setItem('patientFName', patientFName);

    //Patient Last Name
    var patientLName = new Array("Kumari", "Patel", "Harman");
    localStorage.setItem('patientLName', patientLName);

    //Patient Last Name
    var patientUsername = new Array("vijeta@gmail.com", "yagnesh@gmail.com", "harman@gmail.com");
    localStorage.setItem('patientUsername', patientUsername);

    //Patient Last Name
    var patientPassword = new Array("5555", "5555", "5555");
    localStorage.setItem('patientPassword', patientPassword);

    //Patient Mobile No
    var patientMNo = new Array("+12346665436", "+12349866543", "+12342736543");
    localStorage.setItem('patientMNo', patientMNo);


    //Loading Appointment Data

    //Person FName
    var personFName = new Array("Vijeta", "Yagnesh", "Harman","Vijeta", "Yagnesh", "Harman","Vijeta", "Yagnesh", "Harman");
    localStorage.setItem('personFName', personFName);

    //Person LName
    var personLName = new Array("Kumari", "Patel", "Harman","Kumari", "Patel", "Harman","Kumari", "Patel", "Harman");
    localStorage.setItem('personLName', personLName);

    //Person Email
    var personEmail = new Array("vijeta@gmail.com", "yagnesh@gmail.com", "harman@gmail.com","vijeta@gmail.com", "yagnesh@gmail.com", "harman@gmail.com","vijeta@gmail.com", "yagnesh@gmail.com", "harman@gmail.com");
    localStorage.setItem('personEmail', personEmail);

    //Person Mobile No
    var personMNo = new Array("+12346665436", "+12349866543", "+12342736543","+12346665436", "+12349866543", "+12342736543","+12346665436", "+12349866543", "+12342736543");
    localStorage.setItem('personMNo', personMNo);

    //Doctor ID
    var doctorID = new Array(2,1,5,0,3,7,4,8,6);
    localStorage.setItem('doctorID', doctorID);

    //Appointment Date
    var apDate = new Array("2021-01-04","2021-01-04","2021-01-05","2021-01-05","2021-01-06","2021-01-06","2021-01-07","2021-01-08","2021-01-09");
    localStorage.setItem('apDate', apDate);

    //Appointment Day
    var apDay = new Array("Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Saturday");
    localStorage.setItem('apDay', apDay);

    //Appointment Timeslot (1 to 6)
    var apTime = new Array(2,5,3,6,1,3,4,2,1);
    localStorage.setItem('apTime', apTime);

    //Appointment Purpose
    var apPurpose = new Array("Sudden Pain", "Eye Disorder","Blood Circulation","Brain Hemrage", "Leg Pain", "Braces Issue", "Eye Infection", "Liver Issues", "Medicine Advice");
    localStorage.setItem('apPurpose', apPurpose);
}