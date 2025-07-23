function scrollToElement(id) {
    const element = document.getElementById(id)
    $("html, body").animate(
        {
            scrollTop: $(element).offset().top - $("#navbar").offset().top,
        },
        1000
    );
}

function scrollToTop() {
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        1000
    );
}
