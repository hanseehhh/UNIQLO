$(document).ready(function () {
    // fetch data header
    $('.header-container').load('components/header.html');
    $(".footer-container").load("components/footer.html");

    // scroll magazine
    const url = [
        "contents/what-are-timeless-tone.html",
        "contents/edinburgh-old-city-new-style.html",
        "contents/the-playful-pairs.html",
        "contents/coziness-and-comfort-in-stockholm.html",
        "contents/the-ins-and-out-of-easy-wear.html",
        "contents/kagawa-timeless-modern.html",
        "contents/unique-clothing.html",
    ]

    const images = [
        "assets/magazine/Magazine_2.png",
        "assets/magazine/Magazine_3.png",
        "assets/magazine/Magazine_4.png",
        "assets/magazine/Magazine_5.png",
        "assets/magazine/Magazine_6.png",
        "assets/magazine/Magazine_7.png",
        "assets/magazine/Magazine_8.png",
    ];

    const texts = [
        "What Are Timeless Tone?",
        "Edinburgh: Old City, New Style",
        "The Playful Pairs",
        "Coziness and Comfort in Stockholm",
        "The Ins and Out of Easy Wear",
        "Kagawa: Timeless Modern",
        "Unique Clothing",
    ];

    let currentIndex = 0;

    function updateContent(index) {
        $('.animation').attr('href', url[index]);
        $('#animation-img').attr('src', images[index]);
        $('#animation-text').text(texts[index]);

        const progressWidth = ((index + 1) / images.length) * 100;
        $('.progress-indicator').css('width', `${progressWidth}%`);
    }

    $('#arrow-right').click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent(currentIndex);
    });

    $('#arrow-left').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateContent(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent(currentIndex);
    }, 5000);

    updateContent(currentIndex);
});