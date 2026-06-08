
var categ = "work";

/* ^ ------Add Contact Variables -----^ */
var fileInput =  document.getElementById("fileInput");
var profileImgPreview = document.getElementById("profileImgPreview");

/*===============================================================
Add Contact 
================================================================*/

//_____add profile img_______
fileInput.addEventListener('click',function(){
    
})



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
        case "friend":
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
        case "family":
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

