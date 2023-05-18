$(document).ready(function () {

    chrome.storage.local.get(['token'], function (result) {
        if (result.token) {
            document.location.href = "popup.html"
            $(".mainContainer").show();
            $(".loginShow").hide();
        }
    });


    $("#next1").click(function () {
        var img = $(".LoginShowItemImage img").attr("src", "./images/LoginShow2.webp");
        var text = $(".LoginShowItemDesc p").text("Make Your Notes With Roten.x DevTool On video And Text")
        $("#next1").hide();
        $("#next3").hide();
        $("#next2").css({ "display": "inline-block" });

    });
    $("#next2").click(function () {
        var img = $(".LoginShowItemImage img").attr("src", "./images/LoginShow3.webp");
        var text = $(".LoginShowItemDesc p").text("Review Your Notes Set Reminder And Share With Friends.")
        $("#next1").hide();
        $("#next2").hide();
        $("#next3").css({ "display": "inline-block" });
    });
    $("#next3").click(function () {
        $(".LoginShowContainer1").hide();
        $(".LoginShowContainer2").css({ "display": "block" });
    });
    $("#skip").click(function () {
        $(".LoginShowContainer1").hide();
        $(".LoginShowContainer2").css({ "display": "block" });
    });
});