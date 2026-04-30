function addActivity() {

    let title = document.getElementById("activityTitle").value;
    let school = document.getElementById("school").value;
    let location = document.getElementById("location").value;
    let date = document.getElementById("date").value;
    let person = document.getElementById("person").value;
    let comments = document.getElementById("comments").value;

    let fileInput = document.getElementById("flyerInput");
    let list = document.getElementById("activityList");

    //Cheking 
    if(title === "") {
        alert("Please enter an activity name");
        return;
    
    }
    //cratng of container
    let div = document.createElement("div");
    div.className = "activity-card";

    //adding tect
    div.innerHTML =
    "<h3>" + title + "</h3>" +
    "<p>School: " + school + "</p>" +
    "<p>Location: " + location + "</p>" +
    "<p>Date: " + date + "</p>" +
    "<p>Posted by: " + person + "</p>" +
    "<p>Comments: " + comments + "</p>";

    // image upload
    if (fileInput.files.length > 0) {
        let file = fileInput.files[0];
        let reader = new FileReader();

        reader.onload = function() {
            let img = document.createElement("img");
            img.src = reader.result;
            img.width = 200;
            div.appendChild(img);

    };
reader.readAsDataURL(file);
    }
list.appendChild(div);
// inputs
document.getElementById("activityTitle").value = "";
document.getElementById("school").value = "";
document.getElementById("location").value = "";
document.getElementById("date").value = "";
document.getElementById("date").value = "";
document.getElementById("person").value = "";
document.getElementById("comments").value = "";
fileInput.value = "";
}

function showLastModified() {
    document.getElementById("lastModified").innerHTML =
    "Last Modified: " + document.lastModified;
}
