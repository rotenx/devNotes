const image_Logo_Pen = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERElEQVR4nO2be4hVVRSHP0erSVF6SS/tYU/K6F1UVlRgBFZgEZlDRWJ/xEQFmYUUWVBRSH9YZFlhIWhBUiGRWTRgDyxKCCwI7TG9LFPLTCzLiQX7wo/FOXvfSGHW6X5wuMPZv3tZa597195rrT3QoUOHDh06dAjEnvwPuRx4HVgPDACbgeXAZGAIDWZ3YFFyuu56DRhJQ3m2wuFNwF/u3rImfhMmOiefB8aksVHAbGCHjF9DgxgGrBbnXqp5wveJpo8GcbM49htwcI1uL+DvpNsKDKUB7AtskAmYVdD/KtoRNIDHxKEvgO6M9ljR2tLYRXDGA9vFqSsK+qdE+zINYLk49HZBe5JbDs+lAbu9gXSZYycW9H1OP4XA7AGsEYfmFfRXVmyQbDWYRFBmup3e6Iy2OwVHXSZbf38HDCcYB6QI3nLi1oJ+lmjXAeOAr+TeVALv9z8DdstoD3JPfFq6P0PuPUkgTpOdnF2XFPTPifYjWfcny/0lBGEI8I4YvrSgP1OSH3udUPOzmE8QpojRfwDHFCbrfdEvdiuIBsXrCMBwoF+MnlPQ94jWkp5DZOxOGVsfZRWYLUb/mLK6Osyhr0V/r4zt75KhmwjAGGCLGD29oL9ftN+4jG+BjK1OdYRBz2IxelUhhx8L/C76q2XsVLeCWAVp0HO2K2OdX9C/KNr3pCpkryuiLX1dwAdi9AsF/TkyWfakT68JiraCHEUAprlIflhhsj4U/TOZoPggARgJfC9G2yqQY7qr9BxYExTXpQrxoOdhMfrbQu3OJusH0d+RCYrXE4AjgG3/on7/iGjXpp1eVVDUXGBQ80pNJG9nsqxKVBUUd0QpgV3oKjZnFPSviv6tTFBcSACGAp+I0Zb357jI1fhOkLEbM7lAiO7OZhfJPcPcZM2VsVEuKN5DAPYGfhajrebX7mRtBPaTsTky1h8l25ubieSlyeqVsSNdULyKABwH/FkTyUutsE9dTXCpjL0b5QzAG2L0mwXt8a4VphndeW4FOYUAXCZGb0+9vhzLRG/7BWoSnqcJcp7nczH68YL+0kJGZ3HjAeDRKG3vXnFoQ+rztztZliuEpjslOS2Hbinob4+Y0bWbvvYXlj0rZP5S0d0JzQpxyDY1OeZHzOhyHCpZmm1a9sloT5ZCpu/uhOUGeaKWzeX2+ytrujuhWSBO3ZbR3SW6LVEyunZYJY5ZA7OKiW7HV4oTodgojo2u+d1vEk1fEwJfixHi2LaKZOUs5/yXheMv4RgrzlnZ2+8NtrrObSk3CMd4d7yF9IS1/9eaHMv8GscEcXJlal7+5Jz/GDichjLJpb8D7ppXOOsbnp4KpwdS7+7imvccnU51zdyJ14z0uZ6uZGPPrqom9TrHbXv7ROF/eNbWTNp/veykae4BTd3V53vXABe08Z5GTQDAtelsTrvlaqv83A08tBMv+7yqMwL2tTfHrR9Z+RP4BzxvG/yEP33CAAAAAElFTkSuQmCC";
const speaker_Image = "data:image/png;base64,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"




function getMainUrl(url) {
  // Remove parameters or query strings
  let mainUrl = url.split('?')[0];
  
  // Remove anchor or fragment identifiers
  mainUrl = mainUrl.split('#')[0];
  
  return mainUrl;
}





function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}
function InitContent() {
  // init html 

  var selection_html = `
<div class="main_Rotenx_selection_container" id="main_Rotenx_selection_container">
    <p id="main_Rotenx_selection_container_edit"><img data-id="main_Rotenx_selection_container_edit" src="${image_Logo_Pen}"></img></p>
    <p id="main_Rotenx_selection_container_speak"><img data-id="main_Rotenx_selection_container_speak" src="${speaker_Image}"></img></p>
</div>`;


  //container html
  var htmlContainer = `<div class="main_Rotenx_Tool" id="main_Rotenx_Tool">
  <div class="main_Rotenx_Tool_Header">
      <div class="main_Rotenx_Tool_Heading">
          <!-- heading -->
          <h1>Roten.X DevTool</h1>
      </div>
      <div class="main_Rotenx_Tool_Menu">
      <div title="move" class="main_Rotenx_Tool_Menu_Move" id="main_Rotenx_Tool_Menu_Move">
      </div>
      <div title="minimize" class="main_Rotenx_Tool_Menu_Minimize" id="main_Rotenx_Tool_Menu_Minimize">
      </div>
          <div title="close" class="main_Rotenx_Tool_Menu_Close" id="main_Rotenx_Tool_Menu_Close">
          </div>
      </div>
  </div>

  <div class="main_Rotenx_Login_contianer" id="main_Rotenx_Login_contianer">
  <img src="https://devtool-eta.vercel.app/rotenx/images/LoginShowCon2.webp" alt="login" />
  <p>login your account by clicking Roten.X DevTool Extension</p>
</div>
  <div class="main_Rotenx_Tool_Main_Container">
      
      <div class="main_Rotenx_Tool_Main_Container_Input">
          <!-- Input -->
          <div class="main_Rotenx_Tool_Main_Container_Input_Color">
              <!-- color selection -->
              <div class="main_Rotenx_Tool_Main_Container_Input_Color_Div">
                  <p class="main_Rotenx_Tool_Main_Container_Input_Color_Div_p" title="Yellow" data-color="#f4d291" style="background-color:  #f4d291;"><input type="radio"
                          name="color" id="#f4d291"></p>
                  <p class="main_Rotenx_Tool_Main_Container_Input_Color_Div_p" title="Gray" data-color="#ADD8E6" style="background-color:  #ADD8E6;"><input type="radio"
                          name="color" id="#ADD8E6"></p>
                  <p class="main_Rotenx_Tool_Main_Container_Input_Color_Div_p" title="Pink" data-color="#b19cd9" style="background-color:  #b19cd9;"><input type="radio"
                          name="color" id="#b19cd9"></p>
                  <p class="main_Rotenx_Tool_Main_Container_Input_Color_Div_p" title="Orange" data-color="#90ee90" style="background-color:  #90ee90;"><input type="radio"
                          name="color" id="#90ee90"></p>
                  <p class="main_Rotenx_Tool_Main_Container_Input_Color_Div_p" title="Green" data-color="#ffcccb" style="background-color:  #ffcccb;"><input type="radio"
                          name="color" id="#ffcccb"></p>
                 </div>
          </div>
          <div class="main_Rotenx_Tool_Main_Container_Input_Title">
              <!-- title -->
              <p id="main_Rotenx_Tool_Main_Container_Input_Title_color" style="background:rgb(244, 210, 145)"></p>
              <input type="text" readonly name="rotenx_title_input" id="rotenx_title_input_text">
          </div>
          <div class="main_Rotenx_Tool_Main_Container_Input_Desc">
              <!-- Description -->
              <textarea type="text" name="Description" rows="5" id="main_Rotenx_Tool_Main_Container_Input_Desc_text"
                  placeholder="Enter Description To Your Notes..."></textarea>
          </div>
          <div class="main_Rotenx_Tool_Main_Container_Input_Btn">
              <!-- buttons -->
              <button class="main_Rotenx_Tool_Main_Container_Input_Btn_close main_Rotenx_Tool_Menu_Close">cancle</button>
              <button class="main_Rotenx_Tool_Main_Container_Input_Btn_save" id="main_Rotenx_Tool_Main_Container_Input_Btn_save">save</button>
          </div>
      </div>
  </div>
</div>`
  var minimizeHtml = ` <div class="main_Rotenx_Tool_minimize_container" id="main_Rotenx_Tool_minimize_container">
<p>Roten.x DevTool</p>
<img src="https://devtool-eta.vercel.app/rotenx/images/uparrow.png" />
</div>`

  document.getElementsByTagName("body")[0].appendChild(createElementFromHTML(selection_html))
  document.getElementsByTagName("html")[0].appendChild(createElementFromHTML(minimizeHtml))
  // create container
  document.getElementsByTagName("html")[0].appendChild(createElementFromHTML(htmlContainer))
}
InitContent();


function loginValidator() {
  chrome.storage.local.get(['token'], function (result) {
    if (!result.token) {
      console.log(result.token);

      var d = document.getElementById("main_Rotenx_Tool_Main_Container")
      var l = document.getElementById("main_Rotenx_Login_contianer")
      d.style.display = "none"
      l.style.display = "flex"
      // ("<p>login first by clicking roten.x devtool extention icon</p>")
    } else {
      console.log(result.token);
      var d = document.getElementById("main_Rotenx_Tool_Main_Container")
      var l = document.getElementById("main_Rotenx_Login_contianer")
      d.style.display = "block"
      l.style.display = "none"
    }
  });
}
loginValidator();


var unMinimize = document.getElementById("main_Rotenx_Tool_minimize_container");
var Minimize = document.getElementById("main_Rotenx_Tool_Menu_Minimize");
var cls_Btn_Container = document.getElementsByClassName("main_Rotenx_Tool_Menu_Close")[0];
var cancle_Btn_Container = document.getElementsByClassName("main_Rotenx_Tool_Menu_Close")[1];
var select_pen = document.getElementById("main_Rotenx_selection_container_edit");
var select_speak = document.getElementById("main_Rotenx_selection_container_speak");
// select_pen.addEventListener("click", () => {

//   document.getElementById("main_Rotenx_Tool").style.display = "block"
//   document.getElementById("main_Rotenx_selection_container").style.display = "none"
// })
// select_speak.addEventListener("click", () => {
//   speechTEXT();
//   document.getElementById("main_Rotenx_selection_container").style.display = "none"
//   console.log("lla");
//   // document.getElementById("main_Rotenx_Tool").style.display = "block"
// })

Minimize.addEventListener("click", () => {
  // adding data in container field
  document.getElementById("main_Rotenx_Tool").style.display = "none";
  document.getElementById("main_Rotenx_Tool_minimize_container").style.display = "flex";
})
unMinimize.addEventListener("click", () => {
  // adding data in container field
  document.getElementById("main_Rotenx_Tool_minimize_container").style.display = "none";
  document.getElementById("main_Rotenx_Tool").style.display = "block";
})
// close contianer
cls_Btn_Container.addEventListener("click", () => {
  // adding data in container field
  document.getElementById("main_Rotenx_Tool").style.display = "none";
  document.getElementById("main_Rotenx_Tool_minimize_container").style.display = "none";
})
cancle_Btn_Container.addEventListener("click", () => {
  // adding data in container field
  document.getElementById("main_Rotenx_Tool").style.display = "none";
  document.getElementById("main_Rotenx_Tool_minimize_container").style.display = "none";
})


// notes color click handler
// main_Rotenx_Tool_Main_Container_Input_Title_color
var Notes_color = document.getElementsByClassName("main_Rotenx_Tool_Main_Container_Input_Color_Div_p");

var AddEventOnNotesColor = function () {
  console.log("saa");
  var attribute = this.getAttribute("data-color");
  document.getElementById(`main_Rotenx_Tool_Main_Container_Input_Title_color`).style.background = `${attribute}`;
};
for (var i = 0; i < Notes_color.length; i++) {
  Notes_color[i].addEventListener('click', AddEventOnNotesColor, false);
};

// drag container code
dragElement(document.getElementById("main_Rotenx_Tool"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("main_Rotenx_Tool_Menu_Move")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("main_Rotenx_Tool_Menu_Move").onmousedown = dragMouseDown;
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


// select all body 

var selectBody = document.querySelectorAll("body");
var selectPointer = document.querySelector("#main_Rotenx_selection_container");
var globalSelectedText = null;
var globalSelectedTextObject = null;

// calling selector function 
selectBody.forEach(elem => {
  elem.addEventListener("mouseup", selectTextAreaShowMenu);
})

const setData = () => {
  // init
  var title = document.getElementById("rotenx_title_input_text")
  title.value = `${globalSelectedTextObject.selectedText}`
}

const SaveData = () => {
  localStorage.setItem('selectedTextData', JSON.stringify(globalSelectedTextObject));

  // init
  var title = document.getElementById("rotenx_title_input_text").value
  var description = document.getElementById("main_Rotenx_Tool_Main_Container_Input_Desc_text").value
  var color = document.getElementById(`main_Rotenx_Tool_Main_Container_Input_Title_color`).style.background
  chrome.storage.local.get(["token"], function (result) {
    if (result.token) {

      var payload = {
        userToken: result.token,
        color: `${color}`,
        urlCode:getMainUrl(window.location.href),
        title: title,
        description: description,
        type: "Text",
        time:new Date(),
        selectedData: globalSelectedTextObject,
        image: document.querySelector("meta[property='og:image']").getAttribute("content")
      }

      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Credentials', 'true');

      headers.append('GET', 'POST', 'OPTIONS');

      fetch("https://jade-smoggy-barnacle.cyclic.app/create-notes", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
      }).then(response => response.json())
        .then(data => {
          // Process the JSON data received in the response
          if (data.status) {
            // InitFetch();
            document.getElementById("main_Rotenx_Tool").style.display = "none";
            document.getElementById("main_Rotenx_Tool_Main_Container_Input_Desc_text").value = ""
          }
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch request
          console.error('Error:', error);
        });
    } else {
      console.log("token not found");
    }
  })
}

var save = document.getElementById("main_Rotenx_Tool_Main_Container_Input_Btn_save")

save.addEventListener("click", () => {
  SaveData()
  // ScreenShot()
})


function selectTextAreaShowMenu(event) {
  setTimeout(() => {
    const selectedText = window.getSelection().toString().trim();
    const selectedText2 = window.getSelection().toString();
    if (selectedText.length > 0 && selectedText !== " ") {
      const x = event.pageX;
      const y = event.pageY;
      const selectPointerWidth = Number(getComputedStyle(selectPointer).width.slice(0, -2));
      const selectPointerHeight = Number(getComputedStyle(selectPointer).height.slice(0, -2));
      selectPointer.style.left = `${x - selectPointerWidth * 0.5}px`;
      selectPointer.style.top = `${y - selectPointerHeight * 1.25}px`;
      selectPointer.style.display = "flex";
      globalSelectedText = selectedText;
    }
    if (selectedText2.length > 0 && selectedText2 !== " ") {

      // Create a range object for the selected text
      var range = window.getSelection().getRangeAt(0);

      // Get the parent element of the selected text through the body element
      var parentElement = range.commonAncestorContainer;
      while (parentElement && parentElement !== document.body) {
        if (parentElement.nodeType === Node.ELEMENT_NODE) {
          // Check if the parent element has an ID or class
          if (parentElement.id || parentElement.classList.length > 0) {
            break;
          }
        }
        parentElement = parentElement.parentNode;
      }

      // Check if the parent element exists and mark the selected text within it
      // if (parentElement) {
      //   var span = document.createElement('mark');
      //   span.style.backgroundColor = document.getElementById(`main_Rotenx_Tool_Main_Container_Input_Title_color`).style.background;
      //   span.appendChild(range.extractContents());
      //   range.insertNode(span);
      // }

      // Save the element map and selected text in local storage
      var elementMap = getElementMap(parentElement);
      var data = {
        elementMap: elementMap,
        selectedText: selectedText,
      };
      globalSelectedTextObject = data;

      setData();
    }
  }, 0);
}

// hiding meun after selecting text

document.addEventListener("mousedown", selectTextAreaHideMenu)
function selectTextAreaHideMenu(event) {
  if (getComputedStyle(selectPointer).display === "flex" && event.target.getAttribute('data-id') == "main_Rotenx_selection_container_edit") {
    selectedTextContianerShow()
  } else if (getComputedStyle(selectPointer).display === "flex" && event.target.getAttribute('data-id') == "main_Rotenx_selection_container_speak") {
    speechTEXT()
  } else if (getComputedStyle(selectPointer).display === "flex") {
    selectPointer.style.display = "none";
    window.getSelection().empty();
  } else {

  }
};


function selectedTextContianerShow() {
  document.getElementById("main_Rotenx_Tool").style.display = "block"
  selectPointer.style.display = "none";
}

let speech = null;
if ('speechSynthesis' in window) {
  speech = new SpeechSynthesisUtterance();
} else {
  console.log("speechSynthesis not found");
}
function speechTEXT() {
  let msg = globalSelectedTextObject.selectedText;
  speech.lang = "en-US";
  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  console.log(speech);
  // hiding pointer
  selectPointer.style.display = "none";
  window.getSelection().empty();
};



// Function to retrieve the saved element map and marked selected text from local storage
function restoreSelectedText() {
  var storedData = localStorage.getItem('selectedTextData');
  if (storedData) {
    var data = JSON.parse(storedData);
    var elementMap = data.elementMap;
    var selectedText = data.selectedText;

    // Find the target parent element based on the element map
    var targetParentNode = findTargetParentNode(elementMap);

    // Mark the selected text within the target parent element
    if (targetParentNode) {
      var range = document.createRange();
      var textNodes = getTextNodes(targetParentNode);
      for (var i = 0; i < textNodes.length; i++) {
        var textNode = textNodes[i];
        var index = textNode.nodeValue.indexOf(selectedText);
        if (index !== -1) {
          range.setStart(textNode, index);
          range.setEnd(textNode, index + selectedText.length);
          break;
        }
      }
      if (!range.collapsed) {
        var span = document.createElement('mark');
        span.style.backgroundColor = 'rgb(244, 210, 145);';
        range.surroundContents(span);
      }
    }
  }
}

// Function to find the target parent element based on the element map
function findTargetParentNode(elementsMap) {
  var targetParentNode = document.body;
  for (var i = elementsMap.length - 1; i >= 0; i--) {
    var element = elementsMap[i];
    if (element.id) {
      targetParentNode = document.getElementById(element.id);
      break;
    } else if (element.tagName) {
      var nodes = targetParentNode.getElementsByTagName(element.tagName);
      if (nodes.length > 0) {
        targetParentNode = nodes[0];
      }
    }
  }
  return targetParentNode;
}

// Function to retrieve all text nodes within an element
function getTextNodes(element) {
  var textNodes = [];

  function traverse(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      textNodes.push(node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (var i = 0; i < node.childNodes.length; i++) {
        traverse(node.childNodes[i]);
      }
    }
  }

  traverse(element);
  return textNodes;
}

// Function to generate the element map for a given element
function getElementMap(element) {
  var elementsMap = [];
  var currentNode = element;

  while (currentNode && currentNode !== document.body) {
    var elementDetails = {
      tagName: currentNode.tagName,
      id: currentNode.id,
      classList: Array.from(currentNode.classList)
    };
    elementsMap.push(elementDetails);
    currentNode = currentNode.parentNode;
  }

  return elementsMap;
}

// Restore the marked selected text after page reload
restoreSelectedText();



