$(() => {
    $.get("/api/posts", posts => {
        displayPosts(posts, $(".postsContainer"))
    })
})

