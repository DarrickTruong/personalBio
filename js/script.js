
let totalContacts=0;
var full_name;

loginReg = (e) => {
    e.preventDefault();
    let user_name = document.getElementById("username").value;

    fetch("https://jsonplaceholder.typicode.com/users").then(res => {
        return res.json();
    }).then(data => {
        console.log(data);

        if (validateLogin(data, user_name)) {

            document.getElementById("loginValidate").innerHTML = `<p class="text-success">${full_name} is successfully signed in</p>`;
        } else {

            document.getElementById("loginValidate").innerHTML = `<p class="text-danger">Invalid username</p>`;
        }
    })
}

validateLogin = (data, username1) => {
    for (user of data) {
        // console.log(user.name);
        if (user.username == username1) {

            full_name = user.name;
            return true;
        }
    }
}

contactForm = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let contact = document.getElementsByName("contact");
    let contact_time = document.getElementById("contact_time").value;
    let date = new Date();
    console.log(date);

    // console.log(contact_time);
    if (contact[0].checked) {
        contact = "email";
    } else {
        contact = "phone";
    }

    let user = {
        name: name,
        email: email,
        phone: phone,
        date_added: date,
        contact: contact,
        contact_time: contact_time
    }
    

    let card = document.createElement("div");
    card.innerHTML = `
        <div class="card ml-auto mr-auto mb-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">${user.email}</p>
                <p class="card-text">${user.phone}</p>
                <p class="card-text">Date Added: ${user.date_added}</p>
                <p class="card-text">Preferred Method: ${user.contact}</p>
                <p class="card-text">Preferred Day/Time: ${user.contact_time}</p>
                <a onclick="remove(event)" href="#" class="btn btn-danger">Remove</a>
                <a data-toggle="modal" data-target="#contactModal" href="#" class="btn btn-primary">Contact Now
                </a> 
            </div>
            
        </div>`;

    // console.log(card);

    document.getElementById("contact-list").appendChild(card);
    totalContacts++;
    document.getElementById("count").textContent = totalContacts;

}

remove = (e) => {
    e.preventDefault();
    console.log(e.path[3]);
    document.getElementById("contact-list").removeChild(e.path[3]);
}

truncate = (e) => {
    console.log(e.target);
    // e.target.classList.remove("text-truncate");
    e.target.classList.remove("project-desc")
}