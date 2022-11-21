$(document).ready(() => {
    // display tab based on the value of selected tab
    if(selectedTab === "followers") {
        loadFollowers();
    } else {
        loadFollowing();
    }
    
})

function loadFollowers() {
    $.get(`/api/users/${profileUserId}/followers`, results => {
        outputUsers(results.followers, $(".resultsContainer"))
    })
}

function loadFollowing() {
    $.get(`/api/users/${profileUserId}/following`, results => {
        outputUsers(results.following, $(".resultsContainer"))
    })
}

function outputUsers(results, container) {
    container.html("");

    results.forEach(result => {
        var html = createUserHtml(result, true);
        container.append(html);
    });

    if(results.length == 0) {
        container.append("<span class='noResults'>No results found</span>")
    }
}

function createUserHtml(userData, showFollowButton) {
    var name = userData.firstName + " " + userData.lastName;
    return `<div class='user'>
                <div class="userImageContainer">
                    <img src='${userData.profilePic}' alt='User's profile picture'>
                </div>
                <div class='userDetailsContainer'>
                    <div class='header'>
                        <a href='/profile/${userData.username}'>
                            ${name}
                            <span class='username'>@${userData.username}</span>
                        </a>
                    </div>
                </div>
            </div>`;
}