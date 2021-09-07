var fillGal = function () {
    var row = $('#gallery1 .row');
    for (let index = 1; index < 9; index++) {
        row.append($('#galCol1').clone());
    }
    row.find('.col').click(galClick);
}

var galClick = function () {
    $('#galleryContent').show();
    $('html, body').animate({
        scrollTop: $("#galleryContent").offset().top
    }, 1000);
    var row = $('#galleryContent .row');
    row.empty();
    for (let index = 0; index < 9; index++) {
        row.append(
            `<div class="col">
        <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                    dy=".3em">Thumbnail</text>
            </svg>
        </div>
    </div>`
        );
    }
}

fillGal();
