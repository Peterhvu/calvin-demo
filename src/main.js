$("body").on("click", ".nav-link", navLinkToggle);

function navLinkToggle(e) {
    $(".nav-link").removeClass("active disabled");
    $(this).addClass("active disabled");
    $(".navbar-collapse").removeClass("show");

    const a = $(this), href = a.attr('href');
    $("#about, #contact, #gallery").slideUp('fast');
    $(href).slideDown('slow');
    if (href == '#gallery') showGallery();
}

function showGallery() {
    var imagesCount = 6;
    var imagePath = "src/gallery/sample-image-__.jpg";
    var gallery = $("#gallery");

    // only do once, if this was done, exit 
    if (gallery.children().length > 1) return;

    for (let index = 1; index <= imagesCount; index++) {
        const src = imagePath.replace('__', index.toString());
        const element = $(`<a href="${src}"> <img src="${src}"> </a>`);
        gallery.append(element);
        if (index / 4 == 1) gallery.append('<div class="clear"></div>');
    }
    new SimpleLightbox('.gallery a', { overlayOpacity: 0.9, fadeSpeed: 0, animationSpeed: 100, widthRatio: 1, heightRatio: 1 });
}