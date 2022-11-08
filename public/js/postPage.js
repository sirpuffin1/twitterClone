$(() => {
    $.get("/api/posts/" + postId, posts => {
        displayPostsWithReplies(posts, $(".postsContainer"))
    })
})

