window.addEventListener("load", function () {
    let btn_menu = document.getElementById("btn_menu")
    let hidden_menu = document.getElementById("hidden_menu")
    btn_menu.onclick = function () {
        let list = document.createElement('ul')
        list.id = "list"
        let element = document.createElement('li')
        let link
        if (this.textContent === "Меню")
        {
            //создание списка ul
            list.className = "hidden-menu"

            //создание элементов Li
            element = document.createElement('li')
            element.className = "hidden-menu"
            link = document.createElement('a')
            link.textContent = "Главная"
            link.href = "index.html"
            link.style.color = 'gold'
            element.appendChild(link)
            list.appendChild(element)

            element = document.createElement('li')
            element.className = "hidden-menu"
            link = document.createElement('a')
            link.textContent = "Бассейн"
            link.href = "../pages/swimmingpool.html"
            link.style.color = 'gold'
            element.appendChild(link)
            list.appendChild(element)

            element = document.createElement('li')
            element.className = "hidden-menu"
            link = document.createElement('a')
            link.textContent = "Тренажерный зал"
            link.href = "../pages/gym.html"
            link.style.color = 'gold'
            element.appendChild(link)
            list.appendChild(element)

            element = document.createElement('li')
            element.className = "hidden-menu"
            link = document.createElement('a')
            link.textContent = "Бокс"
            link.href = "../pages/box.html"
            link.style.color = 'gold'
            element.appendChild(link)
            list.appendChild(element)

            hidden_menu.appendChild(list)
            console.log(list.children)
            btn_menu.textContent = "Закрыть"
            btn_menu.style.marginRight = "15px"
            btn_menu.style.width = "4.7em"
        }
        else if (this.textContent === "Закрыть")
        {
            list = document.getElementById('list')
            list.remove()
            btn_menu.textContent = "Меню"
            btn_menu.style.marginRight = "10px"
            btn_menu.style.width = "3.5em"
        }
    }
})
