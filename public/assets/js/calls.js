$(function() {
    $(".add-button").on("click", function(event) {
        var id = $(this).data("id");
        var newState = $(this.data("newstatus");

        var newDevouredState = {
            devoured: newState
        };

        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed status to " + newState);
                location    

});