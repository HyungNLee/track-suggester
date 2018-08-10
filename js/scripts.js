$(document).ready(function() {



  //function to determine if all boxes are checked
  function boxesChecked(a, b, c, d, e) {
    if (a && b && c && d && e) {
      return true;
    } else {
      return false;
    }
  }

  //Function to determine track
  function determineTrack(a, b ,c ,d ,e) {
    var ruby = 0;
    var cSharp = 0;
    var css = 0;

    if (a === "front") {
      css++;
    } else if (a === "back") {
      ruby++;
      cSharp++;
    }

    if (b === "cSharp") {
      cSharp++;
    } else if (b === "css") {
      css++;
    } else if (b === "ruby") {
      ruby++
    }

    if (c === "cSharp") {
      cSharp++;
    } else if (c === "css") {
      css++;
    } else if (c === "ruby") {
      ruby++
    }

    if (d === "cSharp") {
      cSharp++;
    } else if (d === "css") {
      css++;
    } else if (d === "ruby") {
      ruby++
    }

    if (e === "corp") {
      cSharp++;
    } else if (e === "startUp") {
      ruby++;
      css++;
    }

    //math max Function
    var max = Math.max(cSharp, ruby, css);

    //If for return string
    if (ruby === css || ruby === cSharp) {
      if (a === "front") {
        return "cssReact";
      } else {
        return "backEnd";
      }
    } else if (ruby === cSharp) {
        return "backEnd";
    } else if (ruby === css) {
      if (a === "front") {
        return "cssReact";
      } else {
        return "rubyRails";
      }
    } else if (max === cSharp) {
      return "cSharpNet"
    } else if (max === css) {
      return "cssReact"
    } else if (max === ruby) {
      return "rubyRails"
    }
  }





  //User Interface
  //Submit name
  $("#userName").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();

    if (nameInput) {
      $(".nameReturn").text(nameInput);
      $("#userName").slideUp();
      $("#nameChange").fadeIn();
      $("#questions").slideDown();
    } else {
      alert("Please enter a name.");
    }

  })

  //Change name
  $("#nameChange").click(function() {
    $("#userName").slideDown();
    $("#nameChange").hide();
  })

  //Submit questions
  $("#questions").submit(function(event) {
    event.preventDefault();

    var q1Input = $("input:radio[name=q1]:checked").val();
    var q2Input = $("input:radio[name=q2]:checked").val();
    var q3Input = $("input:radio[name=q3]:checked").val();
    var q4Input = $("input:radio[name=q4]:checked").val();
    var q5Input = $("input:radio[name=q5]:checked").val();

    alert(determineTrack(q1Input, q2Input, q3Input, q4Input, q5Input));

  })


})
