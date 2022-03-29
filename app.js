
const postBtn = document.getElementById('post-button')

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        const postArr = data.slice(0, 5)
        let html = ''
        for (post of postArr) {
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
            `
        }
        document.getElementById('posts').innerHTML = html
    })

    document.getElementById("new-post").addEventListener('submit', function(event) {
    event.preventDefault()
    const postTitle = document.getElementById('blog-title').value
    const postBody = document.getElementById('blog-post').value
    const data = {
        title: postTitle,
        body: postBody
    }
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
        .then(res => res.json())
        .then(data => console.log(data))
})



// fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "hello world",
//         completed: false
//     }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
