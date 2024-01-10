$(document).ready(function(){
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });
    $('a[href*="#"]').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop : $($(this).attr('href')).offset().top,
    },
      500, 
      'linear'
    );
  });
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbxp7LB07svQr3DGZsjZFA5Pfs1SUn8bSKpEV6UNlzaEYnqRw31i_vqzt3zjbSwNkguwNw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Pesan telah terkirim!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
