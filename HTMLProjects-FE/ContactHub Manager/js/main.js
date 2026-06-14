
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
    isEmergency: "",
    randNum: ""

}
var allContacts = localStorage.getItem("allContacts") ? JSON.parse(localStorage.getItem("allContacts")) : [];
var allContactsCount = 0, favCounts = 0, emergCounts = 0;


var modalElement = document.getElementById('exampleModal');
// Get the existing Bootstrap instance, or create a new one
const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);

/* ^ ------Add Contact Variables -----^ */
var fileInput = document.getElementById("fileInput");
var profImgDiv = document.getElementById("profileImg");
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

var updatedIndex = null;
var oldImg = "";

displayAllContacts();
displayFavContacts();
displayEmergContacts();
updateCounts();
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
        var imgName = "";
        if (fileInput.files[0]) {
            imgName = fileInput.files[0].name;
        }
        else {
            imgName = oldImg;
        }
        contactObj = {
            fullname: fullNameInput.value,
            phone: phoneNumInput.value,
            email: emailInput.value || "",
            profImg: imgName,
            address: addressInput.value.trim() || "",
            group: groupInput.value || "",
            notes: notesInput.value.trim() || "",
            groupBackgColor: returnCategClass(groupInput.value)[0] || "",
            groupTextColor: returnCategClass(groupInput.value)[1] || "",
            isFavorite: favCheckbox.checked,
            isEmergency: EmergCheckbox.checked,
            randNum: randomNumber1To8()


        }
        console.log("contact obj ", contactObj);

        if (updatedIndex) {
            allContacts[updatedIndex] = contactObj;

            Swal.fire({
                icon: "success",
                title: "Updated",
                text: "contact has been updated  successfuully!",
                timer: 1200
            })
        }
        else {
            allContacts.push(contactObj);
            Swal.fire({
                icon: "success",
                title: "Added",
                text: "Contact has been added successfuly!",
                timer: 1200

            })
        }

        localStorage.setItem("allContacts", JSON.stringify(allContacts));
        console.log("all contacts  ", allContacts);
        displayAllContacts();
        displayEmergContacts();
        displayFavContacts()
        updateCounts();
        modalInstance.hide();
        resetInputs();

    } else if (!validateAllInputs(fullNameInput)) {
        Swal.fire({
            icon: "error",
            title: "Missing Name",
            text: "Please enter a name for the contact!"
        })

    }
    else if (!validateAllInputs(phoneNumInput)) {
        Swal.fire({
            icon: "error",
            title: "Missing Phone",
            text: "Please enter a phone for the contact!"
        })
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
function showFavFooterImg(contact) {
    let favBtn = '';

    if (contact.isFavorite) {
        favBtn += `
               <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                class="svg-inline--fa fa-star" aria-hidden="true" focusable="false"
                                                data-prefix="fas" data-icon="star" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                data-fa-i2svg="" width="17" height="15.11">
                                                <path fill="oklch(0.828 0.189 84.429)"
                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                </path>
                                            </svg>
        `;
    }
    else {
        favBtn += `  <svg xmlns:xlink="http://www.w3.org/1999/xlink"
            class="svg-inline--fa fa-star" aria-hidden="true" focusable="false"
            data-prefix="far" data-icon="star" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
            data-fa-i2svg="" width="17" height="17">
            <path fill="currentColor"
                d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z">
            </path>
        </svg>`
    }

    return favBtn;
}
function showEmergFooterImg(contact) {
    let emergBtn = '';

    if (contact.isEmergency) {
        emergBtn += `
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-inline--fa fa-heart-pulse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart-pulse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" width="17" height="17"><path fill="oklch(0.645 0.246 16.439)" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"></path></svg>
        `;
    }
    else {
        emergBtn += `   <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                class="svg-inline--fa fa-heart" aria-hidden="true" focusable="false"
                                                data-prefix="far" data-icon="heart" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                data-fa-i2svg="" width="17" height="17">
                                                <path fill="currentColor"
                                                    d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z">
                                                </path>
                                            </svg>`
    }

    return emergBtn;
}

function updateCounts() {
    const total = allContacts.length;
    const favCounts = allContacts.filter(c => c.isFavorite).length;
    const emergCounts = allContacts.filter(c => c.isEmergency).length;

    document.querySelector("#total-contacts-count .total-count").innerHTML = total;
    document.querySelector("#favourite-contacts-count .total-count").innerHTML = favCounts;
    document.querySelector("#emergency-contacts-count .total-count").innerHTML = emergCounts;

}


function displayAllContacts() {

    const manageCountsSpan = document.getElementById("manageCount");
    manageCountsSpan.innerHTML = allContacts.length;
    var cartona = ``;
    let stickers = ``;
    let profCardImg = ``;
    let contactTags = ``;
    for (var i = 0; i < allContacts.length; i++) {

        stickers = generateContactStickers(allContacts[i]);
        profCardImg = generateContactProfileImg(allContacts[i]);
        contactTags = generateContactTags(allContacts[i])
        favFooterBtn = showFavFooterImg(allContacts[i])
        emergFooerBtn = showEmergFooterImg(allContacts[i])
        cartona += `
                  <div class=" col-md-6 col-lg-6 ">
                       <div class="contact-card  overflow-hidden ">
                            <div class="pt-4  pb-1 px-2 bg-white rounded-5 shadow-sm">
                                <!---Header-->
                                <div class="d-flex flex-column gap-2">

                                    <div class="d-flex align-items-center gap-2">
                                        <div
                                            class="cont-prof-img  contact-card-svg-container rounded-3 bg-rand-colo${allContacts[i].randNum} position-relative ">
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
                                    <div class="tags-list d-flex flex-wrap gap-2 py-2 align-content-center">
                                        ${contactTags}
                                    </div>
                                </div>
                                <!-----Actions Footer-->
                                   <div
                                    class="py-2    border-top border-1 d-flex justify-content-between align-items-center">
                                    <div class="d-flex gap-2">
                                        <a href="tel:${allContacts[i].phone}" class="contact-call-footer-btn rounded-3">
                                            <img src="images/svg/svgexport-13.svg" alt="">
                                        </a>
                                        <a  href="mailto:${allContacts[i].email}" class="btn email-footer-btn">
                                            <img src="images/svg/svgexport-10.svg" alt="">
                                        </a>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <button id="fav-footer-btn" onclick="TickCardAsFav(${i})">
                                         ${favFooterBtn}
                                        </button>
                                        <button id="emerg-footer-btn" onclick="TickCardAsEmerg(${i}) ">
                                           ${emergFooerBtn}
                                        </button>
                                        <button id="edit-footer-btn"  onclick="setFormForUpdate(${i})">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                class="svg-inline--fa fa-pen" aria-hidden="true" focusable="false"
                                                data-prefix="fas" data-icon="pen" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                data-fa-i2svg="" width="17" height="17">
                                                <path fill="currentColor"
                                                    d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z">
                                                </path>
                                            </svg>
                                        </button>
                                        <button id="delete-footer-btn" onclick="deleteCard(${i})">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                class="svg-inline--fa fa-trash" aria-hidden="true" focusable="false"
                                                data-prefix="fas" data-icon="trash" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                data-fa-i2svg="" width="17" height="19.43">
                                                <path fill="currentColor"
                                                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                           </div>
                        </div> 
`
    }

    if (cartona)
        document.querySelector(".contact-cards").innerHTML = cartona;



}

function displayFavContacts() {
    var cartona = ``;
    let profCardImg = ``;
    for (var i = 0; i < allContacts.length; i++) {
        if (allContacts[i].isFavorite) {

            profCardImg = generateContactProfileImg(allContacts[i]);
            cartona += `
           <div class="fav-card col-md-6  col-xl-12 my-2 p-2 ">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="head d-flex justify-content-between align-items gap-2">
                                        <div class="favourites-head-container   bg-rand-colo${allContacts[i].randNum}   rounded-2 "> 
                                            ${profCardImg}
                                          
                                        </div>
                                        <div class="data">
                                            <h4 class="text-s"> ${allContacts[i].fullname}</h4>
                                            <p class="text-xs">${allContacts[i].phone} </p>
                                        </div>
                                    </div>
                                    <a href="tel:${allContacts[i].phone}" class="call-btn-fav">
                                        <img src="images/svg/svgexport-13.svg" alt="">
                                    </a>
                                </div>
                            </div>
        
        
        `
        }
        if (cartona)
            document.querySelector("#fav-list-cards").innerHTML = cartona;


    }



}
function displayEmergContacts() {
    var cartona = ``;
    let profCardImg = ``;
    for (var i = 0; i < allContacts.length; i++) {
        if (allContacts[i].isEmergency) {

            profCardImg = generateContactProfileImg(allContacts[i]);
            cartona += `

                    <div class="emergency-card col-md-6 col-xl-12 my-2 p-2 ">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="head d-flex justify-content-between align-items gap-2">
                                        <div class="emergency-head-container  bg-rand-colo${allContacts[i].randNum}  rounded-2 ">
                                             ${profCardImg}
                                        </div>
                                        <div class="data">
                                            <h4 class="text-s"> ${allContacts[i].fullname}</h4>
                                            <p class="text-xs">${allContacts[i].phone}</p>
                                        </div>
                                    </div>
                                    <a href="tel:${allContacts[i].phone}" class="call-btn-emergency">
                                        <img src="images/svg/svgexport-19.svg" alt="">
                                    </a>
                                </div>

                            </div>  
        `
        }

    }

    document.querySelector("#emerg-list-cards").innerHTML = cartona;


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




/*========================================================
Get Random num (1-8)
==========================================================*/
function randomNumber1To8() {
    return Math.floor(Math.random() * 8) + 1;
}


/*========================================================
Deals with card 
========================================================*/
function TickCardAsFav(index) {
    debugger
    allContacts[index].isFavorite = !allContacts[index].isFavorite
    localStorage.setItem("allContacts", JSON.stringify(allContacts))
    displayAllContacts();
    displayFavContacts();
    updateCounts();

}
function TickCardAsEmerg(index) {
    allContacts[index].isEmergency = !allContacts[index].isEmergency
    localStorage.setItem("allContacts", JSON.stringify(allContacts))
    displayAllContacts();
    displayEmergContacts();
    updateCounts();
}

/*====================================================
Edit Cardsz
====================================================*/
function setFormForUpdate(index) {
    updatedIndex = index;
    oldImg = allContacts[index].profImg;
    alert("foo")
    fullNameInput.value = allContacts[index].fullname;
    phoneNumInput.value = allContacts[index].phone;
    emailInput.value = allContacts[index].email;
    groupInput.value = allContacts[index].group;
    addressInput.value = allContacts[index].address;
    notesInput.value = allContacts[index].value;
    profImgDiv.innerHTML = generateContactProfileImg(allContacts[index]);
    favCheckbox.checked = allContacts[index].isFavorite;
    EmergCheckbox.checked = allContacts[index].isEmergency;
    modalInstance.show();

}



/*====================================================
 Delete Cards
====================================================*/
function deleteCard(index) {
    alert("dsdd")
    Swal.fire({
        icon: "warning",
        title: 'Delete Contact?',
        text: 'Are you sure you want to delete doaaa alliani? This action cannot be undone.',
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#72797e",
        confirmButtonText: "Yes, delete it!"

    }).then(
        (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Contact has been deleted ",
                    icon: "success",
                    timer: 1200
                });
            }
        }
    )
    allContacts.splice(index, 1);
    localStorage.setItem("allContacts", JSON.stringify(allContacts));
    displayAllContacts()
    displayFavContacts();
    displayEmergContacts();
    updateCounts();
}


/*================================================
Search 
===============================================*/

function searchInContact() {
    alert("gfgfggggg")
    var searchedText = document.getElementById("searchInput").value;
    var cartona = "";
    for (var i = 0; i < allContacts.length; i++) {
        if (allContacts[i].fullname.toLowerCase().includes(searchedText.toLowerCase())
            || allContacts[i].phone.toLowerCase().includes(searchedText.toLowerCase()) ||
            allContacts[i].email.toLowerCase().includes(searchedText.toLowerCase())
        ) {

            stickers = generateContactStickers(allContacts[i]);
            profCardImg = generateContactProfileImg(allContacts[i]);
            contactTags = generateContactTags(allContacts[i])
            favFooterBtn = showFavFooterImg(allContacts[i])
            emergFooerBtn = showEmergFooterImg(allContacts[i])
            cartona += `
                  <div class=" col-md-6 col-lg-6 ">
                       <div class="contact-card  overflow-hidden ">
                            <div class="pt-4  pb-1 px-2 bg-white rounded-5 shadow-sm">
                                <!---Header-->
                                <div class="d-flex flex-column gap-2">

                                    <div class="d-flex align-items-center gap-2">
                                        <div
                                            class="cont-prof-img  contact-card-svg-container rounded-3 bg-rand-colo${allContacts[i].randNum} position-relative ">
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
                                    <div class="tags-list d-flex flex-wrap gap-2 py-2 align-content-center">
                                        ${contactTags}
                                    </div>
                                </div>
                                <!-----Actions Footer-->
                                   <div
                                    class="py-2    border-top border-1 d-flex justify-content-between align-items-center">
                                    <div class="d-flex gap-2">
                                        <a href="tel:${allContacts[i].phone}" class="contact-call-footer-btn rounded-3">
                                            <img src="images/svg/svgexport-13.svg" alt="">
                                        </a>
                                        <a  href="mailto:${allContacts[i].email}" class="btn email-footer-btn">
                                            <img src="images/svg/svgexport-10.svg" alt="">
                                        </a>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <button id="fav-footer-btn" onclick="TickCardAsFav(${i})">
                                         ${favFooterBtn}
                                        </button>
                                        <button id="emerg-footer-btn" onclick="TickCardAsEmerg(${i}) ">
                                           ${emergFooerBtn}
                                        </button>
                                        <button id="edit-footer-btn"  onclick="setFormForUpdate(${i})">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                class="svg-inline--fa fa-pen" aria-hidden="true" focusable="false"
                                                data-prefix="fas" data-icon="pen" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                data-fa-i2svg="" width="17" height="17">
                                                <path fill="currentColor"
                                                    d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z">
                                                </path>
                                            </svg>
                                        </button>
                                        <button id="delete-footer-btn" onclick="deleteCard(${i})">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                class="svg-inline--fa fa-trash" aria-hidden="true" focusable="false"
                                                data-prefix="fas" data-icon="trash" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                data-fa-i2svg="" width="17" height="19.43">
                                                <path fill="currentColor"
                                                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                           </div>
                        </div> 
`
        }
    }
    if (cartona) {
        document.querySelector(".contact-cards").innerHTML = cartona;
    }
}




