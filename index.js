const signupBtn = document.querySelector("#sign-up-btn");
const form = document.querySelector(".sign-up-form");
const inputs = document.querySelectorAll("input");

signupBtn.addEventListener("click", function () {
    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const phoneNumber = document.querySelector("#phone-number").value;
    const pass1 = document.querySelector("#pass1").value;
    const pass2 = document.querySelector("#pass2").value;
 
    validate(firstName, lastName
    ,email,phoneNumber,pass1,pass2)
})

function validate(firstName, lastName
    ,email,phoneNumber,pass1,pass2) {
    if (firstName !== "" && lastName !== ""
        && email !== "" && phoneNumber !== ""
        && pass1 !== "" && pass2 !== "")
    {
        confirmData(firstName, lastName
    ,email,phoneNumber,pass1,pass2);
    } else
    {
        showErrors(firstName, lastName
    ,email,phoneNumber,pass1,pass2);
    }
}

function showErrors(firstName, lastName
    , email, phoneNumber, pass1, pass2) {
    
        

    if (firstName === "")
    {
        document.querySelector("#first-name-error").textContent = "First Name requeired!"
    }
    if (lastName === "")
    {
        document.querySelector("#last-name-error").textContent = "last Name requeired!"
    }
    if (email === "")
    {
        document.querySelector("#email-error").textContent = "Email requeired!"
    }
    if (phoneNumber === "")
    {
        document.querySelector("#phone-number-error").textContent = "Phone number requeired!"
    }

    if (pass1 === "")
    {
        document.querySelector("#pass1-error").textContent = "Paassword requeired!"
    }

    if (pass2 === "")
    {
        document.querySelector("#pass2-error").textContent = "Confirm password requeired!"
    }

    form.addEventListener('submit', (event) => {
    event.preventDefault();
   
});
}

function confirmData(firstName, lastName
    , email, phoneNumber, pass1, pass2) {
    if (pass1 !== pass2)
    {
        document.querySelector("#pass1-error").textContent = "Passwords do not match!"
        document.querySelector("#pass2-error").textContent = "Passwords do not match!"

        form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        });
    } else{
         form.addEventListener('submit', (event) => {
            alert("submitted!")
        });
    }
}

