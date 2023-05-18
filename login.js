var formElement = document.getElementById("mainContianer_RotenX_95sa84asd562sad8546qwe4qw695e32qwe65q32wewqe8465")


function jsonData(targetElement) {
    var formData = document.getElementById(`${targetElement}`)
    var obj = {};
    for (let index = 0; index < formData.length; index++) {
        obj[formData[index].name] = formData[index].value;
    }

    var json_string = obj;
    return json_string;
};



formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    var data = jsonData("mainContianer_RotenX_95sa84asd562sad8546qwe4qw695e32qwe65q32wewqe8465");

    try {
        if (data == false) {
            // message("all fields are required",false)
        } else {
            if (data.email != "" && data.password != "") {
                const FetchData = await fetch("http://localhost:8000/login", {
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
                        document.location.href = "popup.html"
                    });
                }

            } else {
                log
                // message("confirm password is not matching", false);
            }
        }
    } catch (error) {
        console.log(error);
        alert("internal errors contact developer")
    }
})


