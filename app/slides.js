/**
 * Created by Tanner Norton on 6/20/2017.
 */
function newSlide(title, img, paragraph)
{
    return {
        title: title,
        style: {'background-image': 'url("images/' + img + '")'},
        paragraph: paragraph
    }
}

var slidesArray = [
    newSlide('Teej Media Player', 'tmp web gui.jpg',
        'A desktop and server application to play music. It is written in Java and HTML/CSS/JS while using a variety of technologies such as Java\'s Swing API and React.'),
    newSlide('Teej Forum', 'teej forum.jpg',
        'A simple forum server written in HTML, CSS, and JavaScript using NodeJS and PostgreSQL to serve content.'),
    newSlide('Teej Glider', 'teej glider.jpg', 'A simple 2D glider game inspired by the game, Glider PRO.'),
    newSlide('Caps Notifier', 'caps notifier.jpg',
        'A small popup appears to let you know when caps lock is on. Useful if you are using a keyboard with no caps lock indication.')
];