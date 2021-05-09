// Login Status Check JS 

var status = localStorage.getItem("hasLoggedIn");
if(status != 1){
    $('.loginStatus').empty();
    $('.mainMenu').css('margin-left', '100px');
    $('.loginStatus').append(
        '<a href="login.html">Login</a>'
    );
}else{
    $('.loginStatus').empty();
    $('.mainMenu').css('margin-left', '60px');
    $('.loginStatus').append(
        '<a href="myAccount.html">My Account</a>'
    );
}