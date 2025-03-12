const users = [
    {
        email: "user1@gmail.com",
        password: "password1"
    },
    {
        email: "user2@gmail.com",
        password: "password2"
    },
    {
        email: "user3@gmail.com",
        password: "password3"
    },
    {
        email: "sadhanakurmi12@gmail.com",
        password: "your password"
    },
];
document.addEvantListener("DOMcontentloaded", function (){
document.getElementById("loginForm").addEventListener("submit",function(event){
    event.preventDefault();
    let email = document.getElementById("email").Value;
    let password = document.getElementById("password").value;
    const validUser =users.find(users.email == email && user.password === password);
    if (validUser) {
    
        alert("Login Successfull!");
    }
     else {
        alert("Invalid Email or Password");
     }
    });
});