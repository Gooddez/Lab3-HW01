const validColorCheck = (dom, bool) => {
    if (bool) {
        dom.style.backgroundColor = "rgba(205, 255, 198, 1)";
    } else {
        dom.style.backgroundColor = "rgba(255, 198, 198, 1)";
    }
}
const idChecker = (event) => {
    isValid = event.value.length == 13
    validColorCheck(event, isValid)
}

const selectChecker = (event) => {
    isValid = event.value != "0";
    validColorCheck(event, isValid)
}

const nameChecker = (event) => {
    isValid = 2 <= event.value.length & event.value.length <= 20
    validColorCheck(event, isValid)
}

const surnameChecker = (event) => {
    isValid = 2 <= event.value.length & event.value.length <= 30
    validColorCheck(event, isValid)
}

const addressChecker = (event) => {
    isValid = event.value.length >= 15
    validColorCheck(event, isValid)
}

const districtChecker = (event) => {
    isValid = event.value.length >= 2
    console.log(isValid)
    validColorCheck(event, isValid)
}

// const idChecker = (event) => {
//     isValid = event.target.value.length == 13;
//     validColorCheck(event.target, isValid)
// }

// const selectChecker = (event) => {
//     isValid = event.target.value != "0";
//     validColorCheck(event.target, isValid)
// }

// const nameChecker = (event) => {
//     isValid = 2 <= event.target.value.length & userName.value.length <= 20
//     validColorCheck(event.target, isValid)
// }

// const surnameChecker = (event) => {
//     isValid = 2 <= event.target.value.length & surname.value.length <= 30
//     validColorCheck(event.target, isValid)
// }

// const addressChecker = (event) => {
//     isValid = event.target.value.length >= 15
//     validColorCheck(event.target, isValid)
// }

// const districtChecker = (event) => {
//     isValid = event.target.value.length >= 2
//     console.log(isValid)
//     validColorCheck(event.target, isValid)
// }

// let id = document.getElementById("userID")
// console.log(id)
// id.addEventListener("input", idChecker)
// id.addEventListener("change", idChecker)

// let title = document.getElementById("title")
// title.addEventListener("select", selectChecker)
// title.addEventListener("change", selectChecker)

// let userName = document.getElementById("name")
// userName.addEventListener("input", nameChecker)
// userName.addEventListener("change", nameChecker)

// let surname = document.getElementById("surname")
// surname.addEventListener("input", surnameChecker)
// surname.addEventListener("change", surnameChecker)

// let address = document.getElementById("address")

// let subdistrict = document.getElementById("subdistrict")
// subdistrict.addEventListener("input", districtChecker)
// subdistrict.addEventListener("change", districtChecker)

// let district = document.getElementById("district")
// district.addEventListener("input", () => districtChecker)
// district.addEventListener("change", () => districtChecker)
// let province = document.getElementById("province")
// let postalcode = document.getElementById("postalcode")