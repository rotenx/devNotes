function youtube_parser(url) {
    var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
    var match = url.match(regExp);
    return (match && match[1].length == 11) ? match[1] : false;
}

let currentUrl = window.location.href;


function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
}

var globalData = null

function InitFetch() {
    // Periodically check for URL changes
    if (window.location.href !== currentUrl && globalData != null) {
        // Handle YouTube URL change
        globalData.data.map((val, index) => {
            document.getElementById(`main_Rotenx_progress_bar_dot_item_${val.notes_token}`).remove()
        })
        currentUrl = window.location.href;
    }


    chrome.storage.local.get(["token"], function (result) {
        if (result.token) {
            var payload = {
                urlCode: youtube_parser(window.location.href),
                type: "Youtube",
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
                            var html = `<div class="main_Rotenx_progress_bar_dot_item" style="left:${val.selectedData.percentage}%;" id="main_Rotenx_progress_bar_dot_item_${val.notes_token}">
                    <p class="main_Rotenx_progress_bar_dot_item_dot_main" style="background:${val.color}"></p>
                    <div class="main_Rotenx_progress_bar_dot_item_container" id="main_Rotenx_progress_bar_dot_item_container" style="${Math.ceil(val.selectedData.percentage) > 50 ? "left:-290px;" : "right:-5px;"}">
                        <div class="main_Rotenx_progress_bar_dot_item_container_header"
                            id="main_Rotenx_progress_bar_dot_item_container_header">
                            <p id="main_Rotenx_progress_bar_dot_item_container_header_p">Roten.X DevTool</p>
                            <div class="main_Rotenx_progress_bar_dot_item_container_header_icons"
                                id="main_Rotenx_progress_bar_dot_item_container_header_icons">
                                <p title="open link"><img src="https://devtool-eta.vercel.app/rotenx/images/link.svg" /></p>
                                <p title="edit note"><img src="https://devtool-eta.vercel.app/rotenx/images/edit.svg" /></p>
                                <p title="delete note"><img src="https://devtool-eta.vercel.app/rotenx/images/delete.svg" /></p>
                            </div>
                        </div>
                        <div class="main_Rotenx_progress_bar_dot_item_container_main"
                            id="main_Rotenx_progress_bar_dot_item_container_main_${val.notes_token}">
                            <div class="main_Rotenx_Tool_Main_Container_Input_Title">
                                <!-- title -->
                                <p class="main_Rotenx_Tool_Main_Container_Input_Title_color" style="background:${val.color}"></p>
                                <input type="text" readonly name="rotenx_title_input" value="${val.title}" id="rotenx_title_input_${val.notes_token}">
                            </div>
                            <div class="main_Rotenx_Tool_Main_Container_Input_Desc">
                                <!-- Description -->
                                <textarea type="text" readonly name="Description" rows="5" id="main_Rotenx_Tool_Main_Container_Input_Desc_${val.notes_token}"
                                    placeholder="Your Notes Description...">${val.description}</textarea>
                            </div>
                        </div>
                    </div>
                </div>`
                            document.getElementsByClassName("ytp-progress-bar-container")[0].append(createElementFromHTML(html))
                            return
                        })
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

InitFetch()
// Set the initial URL

// Periodically check for URL changes
setInterval(() => {
    if (window.location.href !== currentUrl) {
        // Handle YouTube URL change
        globalData.data.map((val, index) => {
            document.getElementById(`main_Rotenx_progress_bar_dot_item_${val.notes_token}`).remove()
        })
        currentUrl = window.location.href;
        InitFetch()
    }
}, 1000);

window.addEventListener('popstate', function () {
    if (window.location.href !== currentUrl) {
        // Handle YouTube URL change
        globalData.data.map((val, index) => {
            document.getElementById(`main_Rotenx_progress_bar_dot_item_${val.notes_token}`).remove()
        })
        currentUrl = window.location.href;
        InitFetch()

    }
});