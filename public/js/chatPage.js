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

$(".sendMessageButton").click(() => {
    messageSubmitted()
})

$(".inputTextbox").keydown((event) => {
    if(event.which === 13) {
        messageSubmitted();
        return false;
    }
    
})

function messageSubmitted() {
    var inputText = $(".inputTextbox");
    var content = inputText.val().trim();

    if(content != "")
    sendMessage(content)
    inputText.val("")
}

function sendMessage(content) {
    console.log(content)
}