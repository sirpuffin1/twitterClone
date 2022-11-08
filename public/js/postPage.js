$(() => {
    $.get("/api/posts/" + postId, posts => {
        displayPosts(posts, $(".postsContainer"))
    })
})

