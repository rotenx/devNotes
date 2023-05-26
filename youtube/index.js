const image_Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERElEQVR4nO2be4hVVRSHP0erSVF6SS/tYU/K6F1UVlRgBFZgEZlDRWJ/xEQFmYUUWVBRSH9YZFlhIWhBUiGRWTRgDyxKCCwI7TG9LFPLTCzLiQX7wo/FOXvfSGHW6X5wuMPZv3tZa597195rrT3QoUOHDh06dAjEnvwPuRx4HVgPDACbgeXAZGAIDWZ3YFFyuu56DRhJQ3m2wuFNwF/u3rImfhMmOiefB8aksVHAbGCHjF9DgxgGrBbnXqp5wveJpo8GcbM49htwcI1uL+DvpNsKDKUB7AtskAmYVdD/KtoRNIDHxKEvgO6M9ljR2tLYRXDGA9vFqSsK+qdE+zINYLk49HZBe5JbDs+lAbu9gXSZYycW9H1OP4XA7AGsEYfmFfRXVmyQbDWYRFBmup3e6Iy2OwVHXSZbf38HDCcYB6QI3nLi1oJ+lmjXAeOAr+TeVALv9z8DdstoD3JPfFq6P0PuPUkgTpOdnF2XFPTPifYjWfcny/0lBGEI8I4YvrSgP1OSH3udUPOzmE8QpojRfwDHFCbrfdEvdiuIBsXrCMBwoF+MnlPQ94jWkp5DZOxOGVsfZRWYLUb/mLK6Osyhr0V/r4zt75KhmwjAGGCLGD29oL9ftN+4jG+BjK1OdYRBz2IxelUhhx8L/C76q2XsVLeCWAVp0HO2K2OdX9C/KNr3pCpkryuiLX1dwAdi9AsF/TkyWfakT68JiraCHEUAprlIflhhsj4U/TOZoPggARgJfC9G2yqQY7qr9BxYExTXpQrxoOdhMfrbQu3OJusH0d+RCYrXE4AjgG3/on7/iGjXpp1eVVDUXGBQ80pNJG9nsqxKVBUUd0QpgV3oKjZnFPSviv6tTFBcSACGAp+I0Zb357jI1fhOkLEbM7lAiO7OZhfJPcPcZM2VsVEuKN5DAPYGfhajrebX7mRtBPaTsTky1h8l25ubieSlyeqVsSNdULyKABwH/FkTyUutsE9dTXCpjL0b5QzAG2L0mwXt8a4VphndeW4FOYUAXCZGb0+9vhzLRG/7BWoSnqcJcp7nczH68YL+0kJGZ3HjAeDRKG3vXnFoQ+rztztZliuEpjslOS2Hbinob4+Y0bWbvvYXlj0rZP5S0d0JzQpxyDY1OeZHzOhyHCpZmm1a9sloT5ZCpu/uhOUGeaKWzeX2+ytrujuhWSBO3ZbR3SW6LVEyunZYJY5ZA7OKiW7HV4oTodgojo2u+d1vEk1fEwJfixHi2LaKZOUs5/yXheMv4RgrzlnZ2+8NtrrObSk3CMd4d7yF9IS1/9eaHMv8GscEcXJlal7+5Jz/GDichjLJpb8D7ppXOOsbnp4KpwdS7+7imvccnU51zdyJ14z0uZ6uZGPPrqom9TrHbXv7ROF/eNbWTNp/veykae4BTd3V53vXABe08Z5GTQDAtelsTrvlaqv83A08tBMv+7yqMwL2tTfHrR9Z+RP4BzxvG/yEP33CAAAAAElFTkSuQmCC"
var video = document.getElementsByTagName("video")[0];
console.log(video);

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}
function Init() {
  // init html 
  var html = ` <div class="main_Rotenx_pen_tool" id="main_Rotenx_pen_tool_btn_ctrl" title="Roten.x Notes">
  <img src="${image_Logo}" alt="notes"/>
</div>`;

  //container html
  var htmlContainer = `<div class="main_Rotenx_Tool" id="main_Rotenx_Tool">

  <div class="main_Rotenx_Tool_Header" id="main_Rotenx_Tool_Header">
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
  <div class="main_Rotenx_Tool_Main_Container" id="main_Rotenx_Tool_Main_Container">
      
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
              <input type="text" readonly name="rotenx_title_input" id="rotenx_title_input">
          </div>
          <div class="main_Rotenx_Tool_Main_Container_Input_Desc">
              <!-- Description -->
              <textarea type="text" name="Description" rows="5" id="main_Rotenx_Tool_Main_Container_Input_Desc"
                  placeholder="Enter Description To Your Notes..."></textarea>
          </div>
          <div class="main_Rotenx_Tool_Main_Container_Input_Btn">
              <!-- buttons -->
              <button class="main_Rotenx_Tool_Main_Container_Input_Btn_close main_Rotenx_Tool_Menu_Close">cancle</button>
              <button class="main_Rotenx_Tool_Main_Container_Input_Btn_save"  id="main_Rotenx_Tool_Main_Container_Input_Btn_save">save</button>
          </div>
      </div>
  </div>
</div>`
  var minimizeHtml = ` <div class="main_Rotenx_Tool_minimize_container" id="main_Rotenx_Tool_minimize_container">
<p>Roten.x DevTool</p>
<img src="https://devtool-eta.vercel.app/rotenx/images/uparrow.png" />
</div>`

  var progress_bar_pen_html = `    <div class="main_Rotenx_progress_bar_pen" id="main_Rotenx_progress_bar_pen">
  <img src="https://devtool-eta.vercel.app/rotenx/images/youtubepen.png" />
</div>`

  var selection_html = `
<div class="main_Rotenx_selection_container" id="main_Rotenx_selection_container">
    <p><img src="https://devtool-eta.vercel.app/rotenx/images/edit.svg"></img>
    <p><img src="https://devtool-eta.vercel.app/rotenx/images/edit.svg"></img>
</div>`;

  document.getElementsByClassName("ytp-progress-bar-container")[0].appendChild(createElementFromHTML(progress_bar_pen_html))

  document.getElementsByTagName("html")[0].appendChild(createElementFromHTML(minimizeHtml))
  // create container
  document.getElementsByTagName("html")[0].appendChild(createElementFromHTML(htmlContainer))
  document.getElementsByTagName("html")[0].appendChild(createElementFromHTML(selection_html))
  // create html in youtube icon
  document.getElementsByClassName("ytp-left-controls")[0].appendChild(createElementFromHTML(html))

  // color 
  document.getElementById(`main_Rotenx_Tool_Main_Container_Input_Title_color`).style.background = `#f4d291`;

}

Init();

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


function youtube_parser(url) {
  var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
  var match = url.match(regExp);
  return (match && match[1].length == 11) ? match[1] : false;
}
function ScreenShot() {

  // Get a reference to the canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Set the canvas dimensions to match the video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Get the image data from the canvas
  const imageData = canvas.toDataURL('image/png');
  console.log((imageData));
  return imageData

}



var gtimeSave = null
// data setter function
const SetData = (time) => {
  // init
  gtimeSave = time
  var CurrentTime = time
  var minutes = Math.floor(CurrentTime / 60) + ":" + (CurrentTime % 60 ? CurrentTime % 60 : '00').toString().split(".")[0];
  console.log(CurrentTime, minutes);
  var title = document.getElementById("rotenx_title_input")
  var titletext = document.getElementsByTagName("title")[0].innerText
  title.value = `${minutes} | ${titletext}`
  console.log(title.value);

}




const SaveData = (time) => {
  // init
  var CurrentTime = time
  var minutes = Math.floor(CurrentTime / 60) + ":" + (CurrentTime % 60 ? CurrentTime % 60 : '00').toString().split(".")[0];
  var title = document.getElementById("rotenx_title_input").value
  var description = document.getElementById("main_Rotenx_Tool_Main_Container_Input_Desc").value
  var color = document.getElementById(`main_Rotenx_Tool_Main_Container_Input_Title_color`).style.background
  const duration = video.duration;
  const timestampPercentage = (CurrentTime / duration) * 100;
  chrome.storage.local.get(["token"], function (result) {
    if (result.token) {

      var payload = {
        userToken: result.token,
        color: `${color}`,
        urlCode: youtube_parser(window.location.href),
        title: title,
        description: description,
        type: "Youtube",
        time: `${new Date()}`,
        selectedData: {
          time: CurrentTime,
          url: `${window.location.href}`,
          date: `${new Date().getDate()}`,
          percentage: timestampPercentage
        },
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
            InitFetch();
            document.getElementById("main_Rotenx_Tool").style.display = "none";
            document.getElementById("main_Rotenx_Tool_Main_Container_Input_Desc").value = ""
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
  SaveData(gtimeSave)
  // ScreenShot()
})
// event listner for pen button
// #main_Rotenx_pen_tool_btn_ctrl
//unminimize 
// main_Rotenx_Tool_minimize_container
var unMinimize = document.getElementById("main_Rotenx_Tool_minimize_container");
var Minimize = document.getElementById("main_Rotenx_Tool_Menu_Minimize");
var pen_btn = document.getElementById("main_Rotenx_pen_tool_btn_ctrl");
var cls_Btn_Container = document.getElementsByClassName("main_Rotenx_Tool_Menu_Close")[0];
var cancle_Btn_Container = document.getElementsByClassName("main_Rotenx_Tool_Menu_Close")[1];


pen_btn.addEventListener("click", () => {
  // adding data in container field
  document.getElementById("main_Rotenx_Tool").style.display = "block";
  video.pause();
  SetData(video.currentTime)
})
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
  document.getElementById("main_Rotenx_Tool_Main_Container_Input_Desc").value = ""

})
cancle_Btn_Container.addEventListener("click", () => {
  // adding data in container field
  document.getElementById("main_Rotenx_Tool").style.display = "none";
  document.getElementById("main_Rotenx_Tool_minimize_container").style.display = "none";
  document.getElementById("main_Rotenx_Tool_Main_Container_Input_Desc").value = ""
})


// notes color click handler
// main_Rotenx_Tool_Main_Container_Input_Title_color
var Notes_color = document.getElementsByClassName("main_Rotenx_Tool_Main_Container_Input_Color_Div_p");

var AddEventOnNotesColor = function () {
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




// progress bar 
var ProgressBar = document.querySelector(".ytp-progress-bar");
var selectPointer = document.querySelector("#main_Rotenx_progress_bar_pen");
var globalSelectedTime = null;
selectPointer.addEventListener("click", () => {
  // adding data in container field
  selectPointer.style.display = "none"
  document.getElementById("main_Rotenx_Tool").style.display = "block";
  video.pause();
  SetData(globalSelectedTime);
})
ProgressBar.addEventListener("mousemove", showSelectorElement);
// select function most important
function showSelectorElement(event) {
  setTimeout(() => {
    const progressOffset = event.offsetX;
    const width = video.offsetWidth;
    const duration = video.duration;
    const hoverGeneratedTime = (progressOffset / width) * duration;
    const timestampPercentage = (hoverGeneratedTime / duration) * 100;

    globalSelectedTime = hoverGeneratedTime;
    const selectPointerHeight = Number(getComputedStyle(selectPointer).height.slice(0, -2));
    selectPointer.style.left = `${timestampPercentage}%`;
    selectPointer.style.top = `-${selectPointerHeight + 10}px`;
    selectPointer.style.display = "block";
  }, 0);
}
ProgressBar.addEventListener("mouseout", showSelectorElementhide);
function showSelectorElementhide() {
  setTimeout(() => {
    selectPointer.style.display = "none";
  }, 5000);
}