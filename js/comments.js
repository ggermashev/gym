let page = null
let saved_comments = []
window.addEventListener("load", function ()
{
    let btn_next = document.getElementById('next')
    let btn_prev = document.getElementById('prev')
    page = document.getElementById('page')
    let comment_list = document.getElementById('comments')
    let comments = comment_list.children
    for (let c of comments) {
        saved_comments.push(c)
    }
    comments = _.slice(comments,(parseInt(page.textContent) - 1) * 6,(parseInt(page.textContent) - 1) * 6 + 6)
    comment_list.innerHTML = ''
    for (let c of comments) {
        comment_list.appendChild(c)
    }

    btn_prev.onclick = function ()
    {
        if (page.textContent != 1) {
            page.textContent = parseInt(page.textContent) - 1

            let comment_list = document.getElementById('comments')
            let comments = []
            for (let s of saved_comments) {
                comments.push(s)
            }
            comments = _.slice(comments,(parseInt(page.textContent) - 1) * 6,(parseInt(page.textContent) - 1) * 6 + 6)
            comment_list.innerHTML = ''
            for (let c of comments) {
                comment_list.appendChild(c)
            }
        }
    }

    btn_next.onclick = function () {
        page.textContent = parseInt(page.textContent) + 1

        let comment_list = document.getElementById('comments')
        let comments = []
        for (let s of saved_comments) {
            comments.push(s)
        }
        comments = _.slice(comments,(parseInt(page.textContent) - 1) * 6,(parseInt(page.textContent) - 1) * 6 + 6)
        if (comments.length === 0) {
            page.textContent = parseInt(page.textContent) - 1
        }
        else {
            comment_list.innerHTML = ''
            for (let c of comments) {
                comment_list.appendChild(c)
            }
        }
    }
})
