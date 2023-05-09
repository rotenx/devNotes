// $('.main_Rotenx_Tool_Menu_Move').on('mousedown mouseup', function mouseState(e) {
//     if (e.type == "mousedown") {
//         //code triggers on hold
//         console.log(e,"hold");
//     }
// });
dragElement(document.getElementById("main"));


function dragElement(elmnt) {
    console.log(elmnt,"sad");
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById("move")) {
      // if present, the header is where you move the DIV from:
      document.getElementById("move").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }




//   minimize

let minimize = document.getElementById("minimize");

minimize.addEventListener("click",() => {
})



// input notes color selection

$('.main_Rotenx_Tool_Main_Container_Input_Color_Div p').click(function() {
    var color = $(this).attr("data-color");
    $('.main_Rotenx_Tool_Main_Container_Input_Color_Div p').css({"width":"20px","height":"20px","border":"none"})
    $(this).css({"width":"25px","height":"25px","border":"1px solid "+color});
});