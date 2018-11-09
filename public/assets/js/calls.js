$(function () {
    // $.ajax("/api/burgers", {
    //     type: "GET"
    // }).then(
    //     function(data) {
    //         console.log(data);
    //     }
    // )


    // $(".devour-button").on("click", function (event) {  /// This should refer to a different button
    //     event.preventDefault();

    //     var id = $(this).data("movieid");
    //     var devouredStatus = 

    //     $.ajax("/api/burgers" + id, {
    //         type: "PUT"
    //     }

        
    // });

    $("#create-burger").on("click", function (event) {
        event.preventDefault()

        var newBurger = {
            name: $("#bu").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});