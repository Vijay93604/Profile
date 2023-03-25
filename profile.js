$(".hideAndShow").hide();
$("#java").show();

function hideAndShowProject(id){
    $(".hideAndShow").hide();
    $("#"+id).fadeIn();
}
