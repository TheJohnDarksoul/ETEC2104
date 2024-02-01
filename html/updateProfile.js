"use strict";

function submit()
{
    let name = document.getElementById("name").value;
    let dob = document.getElementById("bday").value;
    let email = document.getElementById("email").value;

    console.log("Info:",name,dob,email);

    let J = {
        Name: name,
        bday: dob,
        eMail: email
    };
    fetch("/updateProfile",
        {
            method: "POST",
            body: JSON.stringify(J)
        }
        ).then((resp) => 
        {
            resp.json().then((J) => 
            {
                console.log("Server said: ", J);
            });
        }).catch((err) =>
        {
            console.log("Oopsie",err);
        })
}