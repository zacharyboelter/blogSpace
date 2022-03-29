
let postTitle = document.getElementById('post-title')
let post = document.getElementById('post-body')

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (post of postsArr) {
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
        }
        document.getElementById('posts').innerHTML = html
    })