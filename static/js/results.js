console.log("This is results.js");

// get picture references
var picture_1 = d3.select("#picture_1");
var caption_div = d3.select("#image-caption");

var image_paths = {
    regression: "Final_Project_Regression_model_1.png",
    importance: "Feature_Importance_Ranking_2.png",
    Observed: "Observed vs Predicted_graph_2.png",
    Predicted: "Second_Predictive model_4.png",
    heatmap1: "heatmap1.png",
    heatmap2: "heatmap_2.png",
    results:"results.png"
}

var image_captions = {
    regression: "This plot shows how the model fits the prediction error.",
    importance: "The feature importance ranking shows us what features played a significant factor in the predictive analysis. As suspected budget and popularity features play a strong role.",
    Observed: "This is a good visulization of how the two sets of data overlay using the Random forest regression model. ",
    Predicted: "This plot shows how the model fits the residuals.",
    heatmap1: "Comparing models against each other can show us which one performed better as a predictive analysis but they can also validate each other to a certain extent. We can see the correlation matrix below backs up what the feature importance scores showed us using random forest regression.",
    heatmap2: "This heatmap shows the correlation between ",
    results:"The Multiple Linear Regression results have a test score and a train score that are nearly identical when only weighing features budget and popularity."

}

function changePictures(image_name) {
    var file_name = image_paths[image_name]
    var image_path= "images/" + file_name;
    console.log(image_path);
    picture_1.attr("src", image_path)

    var image_caption = image_captions[image_name]
    caption_div.text(image_caption)
}

