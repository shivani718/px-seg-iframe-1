function login()
    {
        var userName=document.getElementById("username");
        var password=document.getElementById("password");
        if(userName.value=="admin" &&password.value =="admin")
        {
            location.href ="home.html";
        }
        else
        {
            alert("wrong username / password");
        }
    }
    