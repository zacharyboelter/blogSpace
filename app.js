


fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        console.log(postsArr)
    })