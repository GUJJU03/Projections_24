$(document).ready(function() {
    $(".main").addClass('active');
    setTimeout(() => {
        $(".main").removeClass('active');
    }, 8000);
});
