$(document).ready(function() {
    $('.color-box').click(function() {

        //Temp. input to copy color to clip Board 
        let temp1 = $("<input>");
        $("body").append(temp1);
        temp1.val($(this).text().trim()).select();
        document.execCommand("copy");
        temp1.remove();

        //Temp. <p> for displaying "color copied !"
        let temp2 = $("<p>");
        temp2.css({
            "font-weight": "bold",
            "position": "absolute",
            "top": "10px",
            "left": "50%",
            "transform": "translateX(-50%)"
        })
        $(this).append(temp2);
        temp2.html('Color Copied !');
        temp2.fadeIn().delay(1000).fadeOut();
        setTimeout(() => {
            temp2.remove();
        }, 1000);
    });
});
