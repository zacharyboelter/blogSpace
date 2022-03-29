
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
    console.log(data)
})