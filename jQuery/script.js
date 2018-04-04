$(document).ready(function(){

           $(".box").css("background-color", "#ffe6cc");
           $("#click").click(function(){
               $("#clickBox").hide();
           });
           $("#clickShow").click(function(){
               $("#clickBox").show();
               $("#clickBox").html("<img src='imgs/hooded.jpg'/>'");
           });
           $("#hover").mouseenter(function(){
               $("#hoverBox").hide();
           });
           $("#hover").mouseleave(function(){
               $("#hoverBox").show();
           });
           $("#toggle").click(function(){
               $("#toggleBox").html("<img src='imgs/hooded.jpg'/>'");
           });
           $("#button1").click(function(){
               $(".replace").html("<p>Those with hooded lids know better than anyone else how easily their eye makeup smears and smudges due to the creasing of the lid, so invest in a great primer to get things off to a stellar start. </p>");
           });
           $("#button2").click(function(){
               $(".replace").html("<p>It's best to apply makeup with your eyes open, because it can be hard to find your natural crease with your eyes closed.</p>");
           });
           $("#button3").click(function(){
               $(".replace").html("<p>Apply the eyeshadow just above where you're marking your crease as opposed to in the natural fold of your eyelid.</p>");
             });
           $("#button4").click(function(){
               $(".replace").html("<p>Any shimmery shades will reflect light and make things look bigger than they are, so if you want to bring the attention away from the hood, keep the shimmer on the part of your lid that actually moves.</p>");
             });
           $("#button5").click(function(){
               $(".replace").html("<p>You can also create a cut crease, which fakes a higher fold on your eyelid..</p>");
             });
            $("#click").hover(function(){
              $("iframe").show();
            });
 });
