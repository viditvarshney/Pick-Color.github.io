$(document).ready(function() {
    $('.color-box').click(function() {

        //Temp. input to copy color to clip Board 
        let temp1 = $("<input>");
        $("body").append(temp1);
        temp1.val($(this).find('.hex-number').text()).select();
        document.execCommand("copy");
        temp1.remove();
        
        //Changing hexNumber to "Copied!"
        let hexNumber = $(this).find('.hex-number').text();
        $(this).find('.hex-number').text('Copied!');
        setTimeout(() => {
            $(this).find('.hex-number').text(hexNumber);
        }, 1000);
    });
});
