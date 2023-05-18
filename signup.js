var formD = document.getElementById("mainContianer_RotenX_8sd65a32asd846f54ds2f89s8d65f3asdf5643ads2f65ads2")


function jsonData(targetElement) {
    var formData = document.getElementById(`${targetElement}`)
    var obj = {};
    for (let index = 0; index < formData.length; index++) {
        obj[formData[index].name] = formData[index].value;
    }

    var json_string = obj;
    return json_string;
};



formD.addEventListener("submit", async (e) => {
    e.preventDefault();
    var data = jsonData("mainContianer_RotenX_8sd65a32asd846f54ds2f89s8d65f3asdf5643ads2f65ads2");

    try {
        if (data == false) {
            // message("all fields are required",false)
        } else {
            if (data.password) {
                const FetchData = await fetch("http://localhost:8000/user", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(response => response.json())
                    .then(data => {

                        // Process the JSON data received in the response
                        console.log(data);

                        return data
                    })
                    .catch(error => {
                        // Handle any errors that occurred during the fetch request
                        console.error('Error:', error);
                    });
                if (FetchData.status == true) {
                    // chrome.tabs.create({
                    //     active: true,
                    //     url: 'localhost:3000/extension'
                    // }, null);

                    chrome.storage.local.set({ "token": FetchData.token }, function () {
                    });
                }

            } else {
                // message("confirm password is not matching", false);
            }
        }
    } catch (error) {
        console.log(error);
        alert("internal errors contact developer")
    }
})


