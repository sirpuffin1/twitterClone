$(document).ready(() => {
    loadPosts();
})

function loadPosts() {
    $.get("/api/posts", { postedBy: profileUserId , isReply: false } ,  posts => {
        displayPosts(posts, $(".postsContainer"))
    })
}