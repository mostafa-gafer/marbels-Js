var count,
    timer,
    selectImg;

count = 0;
selectImg = document.getElementById('parent');

function move() {
    //to set time interval 
    timer = setInterval(function () {
        // to make count move in all iamge
        if (count <= selectImg.children.length - 1) {
            // to put red marble
            selectImg.children[count].setAttribute('src', './images/marble2.jpg');
            // to make last marble not red
            if (count > 0 && count <= selectImg.children.length - 1) {
                selectImg.children[count].previousElementSibling.setAttribute('src', './images/marble1.jpg')

            }
            count++;
        } else {
            selectImg.children[count - 1].setAttribute('src', './images/marble1.jpg');
            count = 0;

        }

    }, 500);
}
function stop() {
    clearInterval(timer);
}



