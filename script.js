const validColorCheck = (dom, bool) => {
    dom.style.border = bool ? "2px solid rgba(116, 255, 97, 1)" : "2px solid rgba(255, 68, 68, 1)";
}

const idChecker = (event) => {
    isValid = event.value.length == 13
    validColorCheck(event, isValid)
    return isValid
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
    validColorCheck(event, isValid)
}

const postalcodeChecker = (event) => {
    isValid = event.value.length == 5
    validColorCheck(event, isValid)
}

const alertSender = (event) => {
    console.log(event)
    if (event.style.border == "2px solid rgb(255, 68, 68)") {
        alert("!!Invalid Input!!")
    }
}
