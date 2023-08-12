const texts = ['Web Developer', 'Illustrator'];
let index = 0;
let count = 0;
let currentText = '';
let letter = '';

typing = () => {
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('text-run').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(typing, 150);
}

typing();