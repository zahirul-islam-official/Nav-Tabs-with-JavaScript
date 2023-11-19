const btn = document.querySelectorAll('.tab-btn');
const tab = document.querySelectorAll('.tab');


function reset() {

    for (let i = 0; i < tab.length; i++) {
        tab[i].style.display = 'none';
        btn[i].style.backgroundColor = '#e4e6eb';
    }

};


function tabOne() {

    reset();

    tab[0].style.display = 'block';
    btn[0].style.backgroundColor = '#fc3845';

};

tabOne();



for (let x = 0; x < btn.length; x++) {

   btn[x].addEventListener('click', function() {

    reset();

    tab[x].style.display = 'block';
    btn[x].style.backgroundColor = '#0866ff';

   });

};