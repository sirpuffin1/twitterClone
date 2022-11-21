$(document).ready(() => {
    // display tab based on the value of selected tab
    if(selectedTab === "replies") {
        loadReplies();
    } else {
        loadPosts();
    }
    
})

function loadPosts() {
    $.get("/api/posts", { postedBy: profileUserId , isReply: false } ,  posts => {
        displayPosts(posts, $(".postsContainer"))
    })
}

function loadReplies() {
    $.get("/api/posts", { postedBy: profileUserId , isReply: true } ,  posts => {
        displayPosts(posts, $(".postsContainer"))
    })
}