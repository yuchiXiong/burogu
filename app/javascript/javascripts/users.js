$(document).on("turbolinks:load", () => {

    if ($('#users__show').length) {
        $(document).scroll(() => {
            if ($(document).scrollTop() > 118) {
                $('.website_nav').addClass('close_website_nav');
            } else {
                $('.website_nav').removeClass('close_website_nav');
            }
        });
    }

});