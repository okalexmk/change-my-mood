$(document).ready(function() {


  

var n = 0;


$("#start").on("click", function() {
  n=0;
  $("intro").hide();
  n++;
  console.log(n);
  $(`question:nth-child(${n}`).show();
});

$(".next").on("click", function() {
  console.log("test");
  $(`question:nth-child(${n}`).hide();
  n++;
  console.log(n);
  $(`question:nth-child(${n})`).show();
});

$(".previous").on("click", function() {
  if (n == 1) {
    $(`question:nth-child(${n}`).hide();
    $("intro").show();
  }
  $(`question:nth-child(${n}`).hide();
  n--;
  $(`question:nth-child(${n})`).show();
});

$("#finish").on("click", function() {
  $(`question:nth-child(${n})`).hide();
  $("#result").show();
  for (let i = 0; i <= n; i++) {
    let answer = $(`question:nth-child(${i}) textarea`).val();
    console.log(answer);
    if (i == 1) {
      $("#one").text(answer);
    }
    if (i == 2) {
      $("#two").text(answer);
    }
    if (i == 3) {
      $("#three").text(answer);
    }
    if (i == 4) {
      $("#four").text(answer);
    }
    if (i == 5) {
      $("#five").text(answer);
    }
    if (i == 6) {
      $("#six").text(answer);
    }
    if (i == 7) {
      $("#seven").text(answer);
    }
  }
});

$("#myBtn").on("click", function() {
   if($('#more').css('display') === 'block'){
     console.log("test");
     $("#more").hide();
    document.getElementById("myBtn").innerHTML = "read more about CBT";
    }
   else {
      $("#more").show();
    document.getElementById("myBtn").innerHTML = "read less about CBT";
    }
});

$(".home").on("click", function() {
  $("#result").hide();
  $("#acttwo").hide();
  console.log(n);
  $("intro").show();
});

$("#nextactivity").on("click", function() {
  $("#result").hide();
  console.log(n);
  $("#acttwo").show();
});

});




 
