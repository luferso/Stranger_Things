
for (let n = 0; n < 4; n++) {
    const box_content = document.getElementsByClassName("box_content")[n];
    const button = document.getElementsByClassName("box_btt")[n];



function toggle_menu(event){

    if(event.type == 'touchstart') event.preventDefault();

    box_content.classList.toggle('active');
}

button.addEventListener('click', toggle_menu);
button.addEventListener('touchstart', toggle_menu);

}
