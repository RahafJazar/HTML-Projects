
var categ = "work";
var contactObj = {
    fullname: "",
    phone: "",
    email: "",
    profImg: "",
    address: "",
    group: "",
    notes: "",
    groupBackgColor: "",
    groupTextColor: "",
    isFavorite: "",
    isEmergency: ""

}
var allContacts = localStorage.getItem("allContacts") ? JSON.parse(localStorage.getItem("allContacts")) : [];
var favContacts = localStorage.getItem("favContacts") ? JSON.parse(localStorage.getItem("favContacts")) : [];
var emergContacts = localStorage.getItem("emergContacts") ? JSON.parse(localStorage.getItem("emergContacts")) : [];


var modalElement = document.getElementById('exampleModal');


/* ^ ------Add Contact Variables -----^ */
var fileInput = document.getElementById("fileInput");
var profileImgPreview = document.getElementById("profileImgPreview");
var changeProfileImgBtn = document.getElementById("changeProfileBtn");

var fullNameInput = document.getElementById("fullName");
var phoneNumInput = document.getElementById("phoneNum");
var emailInput = document.getElementById("email");
var groupInput = document.getElementById("group");
var addressInput = document.getElementById("address");
var notesInput = document.getElementById("notes");

var favCheckbox = document.getElementById("fav");
var EmergCheckbox = document.getElementById("emerg");

var saveContactBtn = document.getElementById("saveContactBtn");
var cancelBtn = document.getElementById("cancelBtn");


displayAllContacts();
/*===============================================================
Add Contact 
================================================================*/

//_____add profile img_______
//changeProfilleImgBtn clicked => file ingput clicked -> change will  be 
changeProfileImgBtn.addEventListener("click", function () {

    fileInput.click();
})

fileInput.addEventListener("change", function (event) {
    const fileInputRes = event.target.files[0];
    console.log(fileInputRes)
    if (!fileInputRes) {
        fileInput.files[0].name = null;
        profileImgPreview.setAttribute("src") = "images/svg/svgexport-21.svg";
        profileImgPreview.classList.add("default-img");
        profileImgPreview.classList.remove("preview-img");

    } else {
        fileInput.files[0].name = fileInputRes.name;
        profileImgPreview.setAttribute("src", `images/${fileInputRes.name} `);
        profileImgPreview.classList.remove("default-img");
        profileImgPreview.classList.add("preview-img");
    }
    console.log("file profile img  changed")
})

//_____Validate All Inputs _______
function validateAllInputs(element) {
    var nextSibling = element.nextElementSibling;
    var id = element.id;
    var value = element.value;


    var regex = {
        'fullName': /^[a-zA-Z ]{2,50}$/,
        'phoneNum': /^(01[0-9]{9}|\+20[0-9]{10})$/,
        'email': /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'address': /^.{3,300}$/,
        'notes': /^.{3,600}$/,

    }
    // required fields
    if (id == 'fullName' || id == 'phoneNum') {
        if (!regex[id].test(value)) {
            console.log("match input ");
            setInvalid(element, nextSibling)
            return false

        }
    }
    //optional email but with validation
    else if (id == 'email') {
        if (value !== "" && !regex[id].test(value)) {
            console.log("match input ");
            setInvalid(element, nextSibling)
            return false

        }

    }
    else {
        return true;
    }
    setValid(element, nextSibling);
    return true

}

function setInvalid(element, nextSibling) {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    nextSibling.classList.add("d-block")
    nextSibling.classList.remove("d-none")
}
function setValid(element, nextSibling) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    nextSibling.classList.add("d-none")
    nextSibling.classList.remove("d-block");
}
//event pubbling
document.querySelector(".modal-body").addEventListener("input", function (event) {
    validateAllInputs(event.target);
})
//_____ save contact btn pressesed _______
saveContactBtn.addEventListener("click", function () {
    if (validateAllInputs(fullNameInput) && validateAllInputs(phoneNumInput) && validateAllInputs(emailInput)) {
        contactObj = {
            fullname: fullNameInput.value,
            phone: phoneNumInput.value,
            email: emailInput.value || "",
            profImg: fileInput.files[0] ? fileInput.files[0].name : "",
            address: addressInput.value.trim() || "",
            group: groupInput.value || "",
            notes: notesInput.value.trim() || "",
            groupBackgColor: returnCategClass(groupInput.value)[0] || "",
            groupTextColor: returnCategClass(groupInput.value)[1] || "",
            isFavorite: favCheckbox.checked,
            isEmergency: EmergCheckbox.checked

        }
        console.log("contact obj ", contactObj);
        allContacts.push(contactObj);
        localStorage.setItem("allContacts", JSON.stringify(allContacts));
        console.log("all contacts  ", allContacts);
        displayAllContacts();
        modalElement.modal('hide');
        resetInputs();

    }

})

function resetInputs() {
    fullNameInput.value = null
    phoneNumInput.value = null;
    emailInput.value = null;
    fileInput.files.length = 0;
    addressInput.value - null;
    groupInput.value = null;
    notesInput.value = null;
    favCheckbox.checked = false;
    EmergCheckbox.checked = false
}

/*==================================================
Display Connacts
===================================================*/
function generateContactTags(contact) {
    let contactTags = '';

    if (contact.group) {
        contactTags += `
            
                <span class="inline-flex rounded-2 px-2 py-1  ${contact.groupBackgColor}">
                     <p class="text-xs ${contact.groupTextColor}"> ${contact.group}</p>
                 </span>
          
        `;
    }
    if (contact.isEmergency) {

        contactTags += `
               <span class="d-flex justify-content-center align-items-center gap-2 rounded-2 px-2 py-1 bg-rose-100">
                <img src="images/svg/svgexport-12.svg" alt="" width="10" height="10">
                     <p class="text-xs text-rose-500 m-0">Emergency</p>
                 </span>
        `;
    }

    return contactTags;
}
function generateContactProfileImg(contact) {
    let contactCardImg = '';

    if (contact.profImg) {
        contactCardImg += `
            
                <img src="images/${contact.profImg}" alt="" width="100" height="100">
          
        `;
    }
    else {
        const nameParts = contact.fullname.trim().split(' ');
        const firstWordLetter1 = nameParts[0].charAt(0)
        const LastWordLetter1 = nameParts[nameParts.length - 1].charAt(0);
        contactCardImg += `
              <p class="text-white text-uppercase fw-bold"> ${firstWordLetter1 + LastWordLetter1}</p>
        `;
    }

    return contactCardImg;
}
function generateContactStickers(contact) {
    let stickers = '';

    if (contact.isFavorite) {
        stickers += `
            <div class="circle-svg-fav-container bg-amber-400 set-top">
                <img src="images/svg/svgexport-6.svg" alt="">
            </div>
        `;
    }

    if (contact.isEmergency) {
        stickers += `
            <div class="circle-svg-emergency-container bg-rose-500 set-bottom">
                <img src="images/svg/svgexport-7.svg" alt="">
            </div>
        `;
    }

    return stickers;
}

function displayAllContacts() {
    var cartona = ``;
    let stickers = ``;
    let profCardImg = ``;
    let contactTags = ``;
    for (var i = 0; i < allContacts.length; i++) {

        stickers = generateContactStickers(allContacts[i]);
        profCardImg = generateContactProfileImg(allContacts[i]);
        contactTags = generateContactTags(allContacts[i])
        cartona += `
                  <div class="contact-card col-md-6  rounded-3 shadow-sm">
                            <div class="py-4 px-2 bg-white">
                                <!---Header-->
                                <div class="d-flex flex-column gap-2">

                                    <div class="d-flex align-items-center gap-2">
                                        <div
                                            class="cont-prof-img  contact-card-svg-container rounded-3 ${allContacts[i].groupBackgColor} position-relative ">
                                            ${profCardImg}
                                            ${stickers}
                                        </div>
                                        <div>
                                            <h3 class="fw-bold fs-5">${allContacts[i].fullname}</h3>
                                            <div class="d-flex gap-2 align-items-center ">
                                                <div class="call-btn-contact">
                                                    <img src="images/svg/svgexport-9.svg" alt="" width="">
                                                </div>
                                                <p class="text-muted">${allContacts[i].phone} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!---Contact-Details-->
                                    <div class="contact-details d-flex flex-column gap-3">
                                        <div class="email-detail d-flex align-items-center gap-3">
                                            <div class="email-btn">
                                                <img src="images/svg/svgexport-10.svg" alt="">
                                            </div>
                                            <span class="text-muted  text-s">${allContacts[i].email}</span>
                                        </div>
                                        <div class="country-detail  d-flex align-items-center gap-3 ">
                                            <div class="location-btn">
                                                <img src="images/svg/svgexport-11.svg" alt="">
                                            </div>
                                            <span class="text-muted  text-s">${allContacts[i].address}</span>
                                        </div>
                                    </div>
                                    <!---AcrionBar-->
                                    <div class="tags-list d-flex flex-wrap gap-2 py-2">
                                        ${contactTags}
                                    </div>
                                </div>
                                <!-----Actions Footer-->
                                <div class="py-2    border-top border-1">
                                    <div class="d-flex">
                                        <a href="tel:" class="contact-call-footer-btn rounded-3">
                                            <img src="images/svg/svgexport-13.svg" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div> 
`
    }

    document.querySelector(".contact-cards").innerHTML = cartona;
}

function displayFavContacts() {

}
function displayEmergContacts() {

}



/*==============================================================
Contact Cards 
==============================================================*/
function returnCategClass(categ) {
    var arrCateg = [];
    switch (categ) {
        case "work":
            arrCateg.push("bg-work-categ");
            arrCateg.push("text-work-categ");
            break;
        case "friends":
            arrCateg.push("bg-friend-categ ");
            arrCateg.push("text-friend-categ");
            break;
        case "family":
            arrCateg.push("bg-family-categ ");
            arrCateg.push("text-family-categ");
            break;
        case "school":
            arrCateg.push("bg-school-categ ");
            arrCateg.push("text-school-categ");
            break;
        case "other":
            arrCateg.push("bg-other-categ ");
            arrCateg.push("text-other-categ");
            break;
        default:
            arrCateg.push("bg-other-categ ");
            arrCateg.push("text-other-categ");
            break;

    }
    return arrCateg;
}

function toggleFavorite(img) {

}
function toggleEmergency(img) {

}
function editContactHandler(img) {

}
function deleteContactHandler(img) {

}

