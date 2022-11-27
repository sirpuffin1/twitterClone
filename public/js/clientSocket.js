var connected = false;

const socket = io("https://angels-twitter-clone.herokuapp.com");

socket.emit("setup", userLoggedIn);
socket.on("connected", () => connected = true);
socket.on("message received", (newMessage) => {
    messageReceived(newMessage)
})

socket.on("notification received", () => {
    $.get("/api/notifications/latest", (notificationData) => {
        showNotificationPopup(notificationData) 
        refreshNotificationsBadge();
    })
})

function emitNotification(userId) {
    if(userId == userLoggedIn._id) return;

    socket.emit("notification received", userId)
}