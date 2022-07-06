//carousel 
$('.service-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    smartSpeed: 900,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//contact-form submission
$("#contact-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyhgDH3CkiEDT842nBIZlVj1R5cRBQOem7AUYOHH8Oi3pBy9lmxN0i0DN7BBISvz4w8rQ/exec",
        data:$("#contact-form").serialize(),
        method:"post",
        success:function (response){
            alert("Submitted successfully! Thank you for contacting us. We'll get back to you as soon as possible.")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Error!")

        }
    })
})


   