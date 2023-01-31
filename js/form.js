window.addEventListener("load", function () {
    let form = document.getElementById('form')
    form.onsubmit = function (e) {
        e.preventDefault()
        let name = form.name.value
        let surname = form.surname.value
        let mail = form.mail.value
        let phone = form.phone.value
        alert(`имя - ${name}\nфамилия - ${surname}\nпочта - ${mail}\nтелефон - ${phone}`)
    }
})