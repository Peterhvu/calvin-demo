function navLinkToggle(e) {
    $(".nav-link").removeClass("active disabled");
    $(this).addClass("active disabled");
    $(".navbar-collapse").removeClass("show");
}

function showGallery() {
    const gallery = $("#gallery");
    
    const imagesCount = 6;
    const imagePath = "src/gallery/sample-image-__.jpg";

    for (let index = 1; index <= imagesCount; index++) {
        const src = imagePath.replace('__', index.toString());
        const element = $(`<a href="${src}"> <img src="${src}"> </a>`);
        gallery.append(element);
        if (index / 4 == 1) gallery.append('<div class="clear"></div>');
    }
    new SimpleLightbox('.gallery a', { overlayOpacity: 0.9, fadeSpeed: 0, animationSpeed: 100, widthRatio: 1, heightRatio: 1 });
}

showGallery();

$("body").on("click", "#logo, .nav-link", navLinkToggle);