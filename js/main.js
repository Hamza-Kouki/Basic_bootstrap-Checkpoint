$("#hoverLinks").find("p").hover(function () {
    $("#hoverLinks>*").hide()
        .filter($(this).p(".col-md-2 col-sm-4 col-xs-6")).show()
})