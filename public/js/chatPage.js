$(document).ready(() => {
    $.get(`/api/chats/${chatId}`, data => $("#chatName").text(getChatName(data)))
})

$("#chatNameButton").click(() => {
    var name = $("#chatNameTextbox").val().trim();
    $.ajax({
        url: "/api/chats/" + chatId,
        type: "PUT",
        data: { chatName: name},
        success: (data, status, xhr) => {
            if(xhr.status == 400) {
                alert("The chat name could not be updated.")
            } else {
                location.reload();
            }
        }
    })
})