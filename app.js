const form = document.getElementById('new-post')
//set global scope array for wide use
let postsArray = []

//function to render the html
function renderPosts() {
    let html = ''
    for (post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
            `
    }
    document.getElementById('posts').innerHTML = html
}
// fetch to load the database
fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        //assign objects from whole array to our globally scoped array
        postsArray = data.slice(0, 5)
        renderPosts()
    })

    //event listener
form.addEventListener('submit', function (event) {
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
    //POST method allows us to add posts after we update the postsArray with new entry from input
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
        .then(res => res.json())
        .then(data => {
            postsArray.unshift(data)
            renderPosts()
        })
        form.reset()
})
