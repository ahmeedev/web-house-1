 $(document).ready(function() {

     setInterval(function() {
         var newColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
         $('.container').animate({ backgroundColor: newColor })
         $('.container').animate({ color: newColor })
     }, 1000);



     $('.my-modal').hide();
     $('#expand').click(function() {
         $('.my-modal').slideDown(2000);
     });
     $('#collapse').click(function() {
         $('.my-modal').slideUp(2000);
     });
     $('#toggle').click(function() {
         $('.my-modal').toggle(2000);
     });
     $('#show').click(function() {
         $('.my-modal').show(2000);
     });
     $('#hide').click(function() {
         $('.my-modal').hide(2000);
     });
 })