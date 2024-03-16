$('.btn').on('click',function(e){
    e.preventDefault();
    $(',app').toggleClass('question_block')
})
function spaceBarHandler(event) {
    if (event.keyCode === 32) {
       $('.poping-up-text').toggleClass('poping-up-text--active')
    }
    document.cookie = "seconds=35;";

 }