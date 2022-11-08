console.log("This is results.js");

// get picture references
var picture_1 = d3.select("#picture_1");
var caption_div = d3.select("#image-caption");

var image_paths = {
    regression: "Final_Project_Regression_model_1.png",
    importance: "Feature_Importance_Ranking_2.png"
}

var image_captions = {
    regression: "This is the caption for the regression image",
    importance: "This is the caption for the importance image"
}

function changePictures(image_name) {
    var file_name = image_paths[image_name]
    var image_path= "images/" + file_name;
    console.log(image_path);
    picture_1.attr("src", image_path)

    var image_caption = image_captions[image_name]
    caption_div.text(image_caption)
}

