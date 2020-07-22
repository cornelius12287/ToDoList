// CHECK ON-OFF TASKS
// on() only works for elements present at page load (ul), not newly added elements (li)
// must specify from-load element, and inner elements to listen on
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});


// REMOVE TASKS
$('ul').on('click', 'span', function(event){
    //removes parent li
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //stops event bubble
    event.stopPropagation();
});


// ADD A NEW TASK
$('input[type="text"]').keypress(function(event){
    // check for enter key
    if(event.which === 13){
        var newtodo = $(this).val();
        $(this).val("");
        $('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span>' + newtodo + '</li>');
    }
});


// TOGGLE INPUT VISIBLE
$('.fa-pencil').click(function(){
    $('input[type="text"]').slideToggle();
});