
  $(document).ready(function(){ 

    var magicNumber = Math.floor(Math.random()*101+19); 
    var wins =0;
    var losses =0;
    var userscore=0;
    var crystal1=Math.floor(Math.random()*11+1);
    var crystal2=Math.floor(Math.random()*11+1);
    var crystal3=Math.floor(Math.random()*11+1);
    var crystal4=Math.floor(Math.random()*11+1);

  $("#MGN").text(magicNumber);

  function winner (){
      alert("You Win!!");++wins;
      $("#W").text(wins);
      reset();};

  function loser () {
      alert("You Lose!!");++losses;
      $("#L").text(losses);
      reset();};

   function reset (){
      magicNumber=Math.floor(Math.random()*101+19);
        $("#MGN").text(magicNumber);
      
      userscore= 0;
        $("#currentscore").text(userscore);
      
      crystal1= Math.floor(Math.random()*11+1);
      crystal2= Math.floor(Math.random()*11+1);
      crystal3= Math.floor(Math.random()*11+1);
      crystal4= Math.floor(Math.random()*11+1);
      }    

  $("#Zircon").on("click", function()
  {userscore=userscore+crystal1;
  $("#currentscore").text(userscore);
     if (userscore==magicNumber) {winner()}
  else if (userscore>magicNumber) {loser()}
  });

  $("#Emerald").on("click", function()
  {userscore=userscore+crystal2;
  $("#currentscore").text(userscore);
     if (userscore==magicNumber) {winner()}
  else if (userscore>magicNumber) {loser()}
  });
 

  $("#Aquamarine").on("click", function()
  {userscore=userscore+crystal3;
  $("#currentscore").text(userscore);
    if (userscore==magicNumber) {winner()}
  else if (userscore>magicNumber) {loser()}
  });

  $("#Amethyst").on("click", function()
  {userscore=userscore+crystal4;
  $("#currentscore").text(userscore);
    if (userscore==magicNumber) {winner()}
  else if (userscore>magicNumber) {loser()}
  }

  )});
