$(function(){
    $('.next').click(function(){
        let currentImage = $('.current')
        let nextImage = currentImage.next()

        if(nextImage.length != 0){
            currentImage.removeClass('current').css('z-index', -10)
            nextImage.addClass('current').css('z-index', 10)
        }
        else{
            let firstImage = currentImage.prevAll().last()
            currentImage.removeClass('current').css('z-index', -10)
            firstImage.addClass('current').css('z-index', 10)
        }

       
    })

    $('.prev').click(function(){
        let currentImage = $('.current')
        let prevImage = currentImage.prev()

        if(prevImage.length != 0){
            currentImage.removeClass('current').css('z-index', -10)
            prevImage.addClass('current').css('z-index', 10)
        }
        else{
            let prevImage = currentImage.nextAll().last()
            currentImage.removeClass('current').css('z-index', -10)
            prevImage.addClass('current').css('z-index', 10)
        }
    })
})

//validate form
function validateData(event){
    event.preventDefault()
    let model = document.getElementById('model').value
    let modelIdx = document.getElementById('model').selectedIndex
    let quantity = document.getElementById('quantity').value
    let color = document.getElementById('color').value
    let colorIdx = document.getElementById('color').selectedIndex
    let name = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    let address = document.getElementById('address').value

    console.log(model)
    console.log(modelIdx)
    console.log(quantity)
    console.log(color)
    console.log(colorIdx)
    console.log(name)
    console.log(phone)
    console.log(address)

    let error = document.getElementById('error')
    if(modelIdx == 0){
        error.innerText = "Please pick a model"
    }
    else if(quantity<1){
        error.innerText = "Minimum reserve quantity is 1"
    }
    else if(colorIdx == 0){
        error.innerText = "Please pick a color"
    }
    else if(name.length == 0){
        error.innerText = "Name can't be empty"
    }
    else if(!phone.startsWith('08')){
        error.innerText = "Phone number format is '08'"
    }
    else if(!address.includes("Jalan")){
        error.innerText = "Address must include 'Jalan'"
    }
    else{
        error.innerText = ""
        alert("Success Reserve")
    }
}

//gallery page
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
 
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

//vixian and kawasako page
$(function(){

    $('.next1').click(function(){

        let currentImage = $('.active1')
        let nextImage = currentImage.next()

       if(nextImage.length != 0){
            currentImage.removeClass('active1').css('z-index', -10)
            nextImage.addClass('active1').css('z-index', 10)
       }else{
           let firstImage = currentImage.prevAll().last()
           currentImage.removeClass('active1').css('z-index',-10)
           firstImage.addClass('active1').css('z-index', 10)

       }
    })

    $('.prev1').click(function(){

        let currentImage = $('.active1')
        let prevImage = currentImage.prev()

       if(prevImage.length != 0){
            currentImage.removeClass('active1').css('z-index', -10)
            prevImage.addClass('active1').css('z-index', 10)
       }else{
           let lastImage = currentImage.nextAll().last()
           currentImage.removeClass('active1').css('z-index',-10)
           lastImage.addClass('active1').css('z-index', 10)

       }
    })




    $('.next2').click(function(){

        let currentImage = $('.active2')
        let nextImage = currentImage.next()

       if(nextImage.length != 0){
            currentImage.removeClass('active2').css('z-index', -10)
            nextImage.addClass('active2').css('z-index', 10)
       }else{
           let firstImage = currentImage.prevAll().last()
           currentImage.removeClass('active2').css('z-index',-10)
           firstImage.addClass('active2').css('z-index', 10)

       }
    })

    $('.prev2').click(function(){

        let currentImage = $('.active2')
        let prevImage = currentImage.prev()

       if(prevImage.length != 0){
            currentImage.removeClass('active2').css('z-index', -10)
            prevImage.addClass('active2').css('z-index', 10)
       }else{
           let lastImage = currentImage.nextAll().last()
           currentImage.removeClass('active2').css('z-index',-10)
           lastImage.addClass('active2').css('z-index', 10)

       }
    })



    $('.next3').click(function(){

        let currentImage = $('.active3')
        let nextImage = currentImage.next()

       if(nextImage.length != 0){
            currentImage.removeClass('active3').css('z-index', -10)
            nextImage.addClass('active3').css('z-index', 10)
       }else{
           let firstImage = currentImage.prevAll().last()
           currentImage.removeClass('active3').css('z-index',-10)
           firstImage.addClass('active3').css('z-index', 10)

       }
    })

    $('.prev3').click(function(){

        let currentImage = $('.active3')
        let prevImage = currentImage.prev()

       if(prevImage.length != 0){
            currentImage.removeClass('active3').css('z-index', -10)
            prevImage.addClass('active3').css('z-index', 10)
       }else{
           let lastImage = currentImage.nextAll().last()
           currentImage.removeClass('active3').css('z-index',-10)
           lastImage.addClass('active3').css('z-index', 10)

       }
    })


    $('.next4').click(function(){

        let currentImage = $('.active4')
        let nextImage = currentImage.next()

       if(nextImage.length != 0){
            currentImage.removeClass('active4').css('z-index', -10)
            nextImage.addClass('active4').css('z-index', 10)
       }else{
           let firstImage = currentImage.prevAll().last()
           currentImage.removeClass('active4').css('z-index',-10)
           firstImage.addClass('active4').css('z-index', 10)

       }
    })

    $('.prev4').click(function(){

        let currentImage = $('.active4')
        let prevImage = currentImage.prev()

       if(prevImage.length != 0){
            currentImage.removeClass('active4').css('z-index', -10)
            prevImage.addClass('active4').css('z-index', 10)
       }else{
           let lastImage = currentImage.nextAll().last()
           currentImage.removeClass('active4').css('z-index',-10)
           lastImage.addClass('active4').css('z-index', 10)

       }
    })


    $('.next5').click(function(){

        let currentImage = $('.active5')
        let nextImage = currentImage.next()

       if(nextImage.length != 0){
            currentImage.removeClass('active5').css('z-index', -10)
            nextImage.addClass('active5').css('z-index', 10)
       }else{
           let firstImage = currentImage.prevAll().last()
           currentImage.removeClass('active5').css('z-index',-10)
           firstImage.addClass('active5').css('z-index', 10)

       }
    })

    $('.prev5').click(function(){

        let currentImage = $('.active5')
        let prevImage = currentImage.prev()

       if(prevImage.length != 0){
            currentImage.removeClass('active5').css('z-index', -10)
            prevImage.addClass('active5').css('z-index', 10)
       }else{
           let lastImage = currentImage.nextAll().last()
           currentImage.removeClass('active5').css('z-index',-10)
           lastImage.addClass('active5').css('z-index', 10)

       }
    })


    $('.next6').click(function(){

        let currentImage = $('.active6')
        let nextImage = currentImage.next()

       if(nextImage.length != 0){
            currentImage.removeClass('active6').css('z-index', -10)
            nextImage.addClass('active6').css('z-index', 10)
       }else{
           let firstImage = currentImage.prevAll().last()
           currentImage.removeClass('active6').css('z-index',-10)
           firstImage.addClass('active6').css('z-index', 10)

       }
    })


    $('.prev6').click(function(){

        let currentImage = $('.active6')
        let prevImage = currentImage.prev()

       if(prevImage.length != 0){
            currentImage.removeClass('active6').css('z-index', -10)
            prevImage.addClass('active6').css('z-index', 10)
       }else{
           let lastImage = currentImage.nextAll().last()
           currentImage.removeClass('active6').css('z-index',-10)
           lastImage.addClass('active6').css('z-index', 10)

       }
    })



    $('.motor1des')




})

