$(document).ready(() => {
    // display tab based on the value of selected tab
    if(selectedTab === "replies") {
        loadReplies();
    } else {
        loadPosts();
    }
    
})

function loadPosts() {
    $.get("/api/posts", { postedBy: profileUserId , pinned: true } ,  posts => {
        displayPinnedPost(posts, $(".pinnedPostContainer"))
    })
    $.get("/api/posts", { postedBy: profileUserId , pinned: false } ,  posts => {
        displayPosts(posts, $(".postsContainer"))
    })
}

function loadReplies() {
    $.get("/api/posts", { postedBy: profileUserId , isReply: true } ,  posts => {
        displayPosts(posts, $(".postsContainer"))
    })
}

function displayPinnedPost(results, container) {
    if(results.length == 0) {
        container.hide();
        return;
    }
    container.html("");
 
    results.forEach(result => {
        var html = createPostHtml(result);
        container.append(html);
    })

}