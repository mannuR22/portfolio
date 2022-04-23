$(document).ready(function () {

    let pos = 0;

    window.setInterval(function () {

        switch (pos) {
            case 0:
                $(".rotateLine").text("/");
                pos++;
                break;

            case 1:
                $(".rotateLine").text("-");
                pos++;
                break;
            case 2:
                $(".rotateLine").text("\\");
                pos++;
                break;
            case 3:
                $(".rotateLine").text("|");
                pos++;
                break;
            default:
                pos = 0;
        }

    }, 2000 / 15);

    isLogoHidden = false;

    function logoAnimate(isHidden) {

        if (isHidden) {
            $(".cmdText2").fadeIn(500);
            $(".my-self").hide(2000);
            setTimeout(function () {
                $(".otherHalf").show();
                $(".otherHalf").animate({
                    marginLeft: "0em",
                    opacity: "1"

                }, 500);
            }, 1000);




        } else {
            $(".cmdText2").fadeOut(500);

            $(".otherHalf").animate({
                marginLeft: "15em",
                opacity: "0"
            }, "slowly");

            $(".otherHalf").hide(1000);
            $(".my-self").show(1500);



        }
    }
    $(".my-self").hide();

    $(".leftHalf").on("click", function () {
        logoAnimate(isLogoHidden);
        isLogoHidden = !isLogoHidden;
    });

    $(".otherHalf").on("click", function () {
        $(".cmdText2").fadeOut(200);
        $(".otherHalf").animate({
            marginLeft: "15em",
            opacity: "0"
        }, "slowly");

        $(".otherHalf").hide(1000);
        $(".my-self").show(1500);

    });






});