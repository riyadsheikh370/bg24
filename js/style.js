let type = document.querySelector(".type")
let typeText = type.innerHTML;
let typeArr = typeText.split("");
type.innerHTML = "";
let typing = 0;



function typeJs() {
    if (typing < typeText.length) {
        typing++;
        type.innerHTML += typeText.charAt(typing)
        typeArr = typeText.split("");
    } else {
        typeArr.pop("");
        type.innerHTML = typeArr.join("")
        if(typeArr.length == 0) {
            typing = 0;
        }
    }
}
setInterval(() => {
    typeJs()
}, 150)

