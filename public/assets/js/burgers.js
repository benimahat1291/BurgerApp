$(function(){
    $(".devoure-it").on("click", function(e){
        var id = $(this).data("id");
        var newEat = $(this).data("newEat");

        var newEatState = {
            devoured: newEat
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function(){
                console.log("changed eatstate to", newEat);
                location.reload();
            }
        );
    });
    $(".create-form").on("Submit", function(e){
        event.preventDefault();
    
        var newBurger = {
            burger_name: $("#ca").val().trim(),
            burger: $("[name=devoured]:checked").val().trim()
        };
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("created new burger");
                location.reload();
            }
        );
    });
    
    $(".delete-burger").on("click", function(){
        var id = $(this).data("id");
        
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function(){
                console.log("delete burger", id);
                location.reload();
            }
        );
    });
});




