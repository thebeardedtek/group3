$(document).ready(function() {
    window.toggleShowChat = function(){
        $('#chat i').toggleClass('chat-active');

        $('#chat-box').toggle().toggleClass('animated slideInUp');
}
});