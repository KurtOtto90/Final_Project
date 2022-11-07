console.log("This is results.js");

// get picture references
var picture_1 = d3.select("#picture_1");
// var picture_2 = d3.select("#picture_2");

function changePictures(file_name) {
    
    var image_path= "images/" + file_name;
    console.log(image_path);
    picture_1.attr("src", image_path);
}

