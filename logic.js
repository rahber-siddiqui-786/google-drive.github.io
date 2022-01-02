let btn = document.getElementById('change');
let main = document.getElementById('main');

btn.addEventListener('click',function(){
    main.classList.toggle('direction-column');
});

