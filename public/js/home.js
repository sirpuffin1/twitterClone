$(() => {
    $.get("/api/posts", posts => {
        displayPosts(posts, $(".postsContainer"))
    })
})

function displayPosts(results, container) {
    container.html("");

    results.forEach(result => {
        var html = createPostHtml(result);
        container.append(html);
    })

    if(results.length == 0) {
        container.append("<h2>Nothing to show</h2>")
    }
}