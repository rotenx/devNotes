 

function logout(){
chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
    // do something more
    console.log("done");
});
chrome.storage.sync.clear();
}

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
  }

function initContentFetch() {
//     var html = `<div class="main_Rotenx_Selected_Text_Holder_Container">
//     <p title="list of notes" class="main_Rotenx_Selected_Text_Holder_Container_Image"></p>
//     <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container">
//         <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Header">
//             <p>Roten.X DevTool</p>
//         </div>
//         <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data"
//         id="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data">
//     </div>
//     </div>
//   </div>`;
//     document.getElementsByTagName("body")[0].appendChild(createElementFromHTML(html))
  
    chrome.storage.local.get(["token"], function (result) {
      if (result.token) {
        var payload = {
          userToken: result.token
        }
  
        let headers = new Headers();
  
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
  
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
  
        headers.append('GET', 'POST', 'OPTIONS');
  
        fetch("https://jade-smoggy-barnacle.cyclic.app/pop-notes", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(payload)
        }).then(response => response.json())
          .then(data => {
            // Process the JSON data received in the response
            if (data.status) {
              console.log(data);
              showListAdd(data)
            }
          })
          .catch(error => {
            // Handle any errors that occurred during the fetch request
            console.error('Error:', error);
          });
      } else {
        console.error('login now');
  
      }
    })
  
  }
  document.onload = initContentFetch();
  $(document).ready(function(){
    $('body').on('click', 'a', function(){
      chrome.tabs.create({url: $(this).attr('href')});
      return false;
    });

    // settingBtn
    $('.settingBtn').click(function(){
        logout()
      });
 });

function showListAdd(data) {
    data.data.forEach((val) => {
      var html = `<a href="http://localhost:3000/notes/roten.x?url=${val.urlCode}" style="text-decoration: none;color: black;">
              <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data_item">
                <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data_item_bg" style="background:${val.color}"></div>
                <p class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data_item_Color" style="background:${val.color}"></p>
                <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data_item_details">
                  <span title="title">${val.title}</span>
                </div>
              </div>
            </a>`
      document.getElementById("main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data").appendChild(createElementFromHTML(html))
    })
  }
  
  