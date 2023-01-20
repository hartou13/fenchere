const blur = document.querySelectorAll('#blur');
const btn_spe = document.querySelector('.btn-spe');
const popup = document.getElementById('popup');
const btn_closed = document.querySelector('.btn-closed');
btn_spe.addEventListener('click', () =>{
    blur.forEach(b=> {
        b.classList.add('active');
    })
    popup.classList.add('active');

})
btn_closed.addEventListener('click', () =>{
    blur.forEach(b=> {
        b.classList.remove('active');
    })
    popup.classList.remove('active');

})