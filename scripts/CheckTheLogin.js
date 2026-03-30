"use strict"

let userName = prompt("Enter your login name");
if (userName == "Admin")
{
    let password = prompt("Enter your password");
    {
        if (password == "TheMaster")
        {
            alert("Welcome!");
        }
        else if (password)
        {
            alert("Wrong password");
        }
        else 
        {
            alert("Canceled");
        }
    }
}
else if (userName)
{
    alert("I don't know you");
}
else
{
    alert("Canceled");
}