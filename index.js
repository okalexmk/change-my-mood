$(document).ready(function() {


  let n=0;
  console.log('yoo');

  $("#start").on('click',function(){
    console.log("hello")
     $("intro").hide();
    n++
    console.log(n)
     $(`question:nth-child(${n}`).show(); 
    });



  $(".next").on('click',function(){
    console.log('test')
    $(`question:nth-child(${n}`).hide();
    n++
    console.log(n)
    $(`question:nth-child(${n})`).show(); 
     });


  $(".previous").on('click',function(){
     if (n==1) {
     $(`question:nth-child(${n}`).hide(); 
    $("intro").show();
     }
     $(`question:nth-child(${n}`).hide();
    n--
    $(`question:nth-child(${n})`).show() 
    }); 

  $("#finish").on('click',function(){
    $(`question:nth-child(${n})`).hide();
    $("#result").show()
    for (let i=0; i<=n; i++){
      let answer = $(`question:nth-child(${i}) textarea`).val();
      $(`#resultlist td:nth-child(${i})`).text(answer);
    }
        
       
    }); 

});





 
