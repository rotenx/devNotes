function getMainUrl(url) {
  // Remove parameters or query strings
  let mainUrl = url.split('?')[0];

  // Remove anchor or fragment identifiers
  mainUrl = mainUrl.split('#')[0];

  return mainUrl;
}


function initContentFetch() {
  var html = `<div class="main_Rotenx_Selected_Text_Holder_Container">
  <p title="list of notes" class="main_Rotenx_Selected_Text_Holder_Container_Image"></p>
  <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container">
      <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Header">
          <p>Roten.X DevTool</p>
      </div>
      <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data"
      id="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data">
  </div>
  </div>
</div>`;
  document.getElementsByTagName("body")[0].appendChild(createElementFromHTML(html))

  chrome.storage.local.get(["token"], function (result) {
    if (result.token) {
      var payload = {
        urlCode: getMainUrl(window.location.href),
        type: "Text",
        userToken: result.token
      }

      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Credentials', 'true');

      headers.append('GET', 'POST', 'OPTIONS');

      fetch("https://jade-smoggy-barnacle.cyclic.app/find-notes", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
      }).then(response => response.json())
        .then(data => {
          // Process the JSON data received in the response
          if (data.status) {
            console.log(data);
            globalData = data
            data.data.map((val, index) => {
              restoreSelectedText(val)
            })


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



function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}
// append list show

function showListAdd(data) {
  data.data.forEach((val) => {
    var html = `<a href="#${val.notes_token}" style="text-decoration: none;color: black;">
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




// Function to retrieve the saved element map and marked selected text from local storage
function restoreSelectedText(datas) {
  var storedData = JSON.stringify(datas.selectedData);
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
        span.style.backgroundColor = `${datas.color}`;
        span.id = `${datas.notes_token}`;
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
