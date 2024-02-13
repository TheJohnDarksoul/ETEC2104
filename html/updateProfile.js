"use strict";

function submit()
{
    let name = document.getElementById("name").value;
    let dob = document.getElementById("bday").value;
    let email = document.getElementById("email").value;

    let oldName = document.getElementById("currentName").innerText;

    console.log("Info:",name,dob,email);

    let J = {
        Name: name,
        bday: dob,
        eMail: email,
        old: oldName
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
                document.getElementById("name").value = "";
                document.getElementById("bday").value = "";
                document.getElementById("email").value = "";
                document.location = document.location; //Refresh the page
            });
        }).catch((err) =>
        {
            console.log("Oopsie",err);
        })
}