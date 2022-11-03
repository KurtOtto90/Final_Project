# Final_Project
## Week One:

### Introduction: 
- Movie	factors such as reviews or release date are an	important way to gauge	the	performance	of a movie.	While providing	a	
numerical data point or star rating to a movie tells us	about the success or failure of	a movie	quantitatively,	
a collection of	movie reviews provides a deeper	qualitative	insight	on different aspects of the movie such as revenue of the movie. A movie's factor could be a predictive method which tells us about the potential movie revenue through machine learning analysis. Deeper analysis of movie factors review could possibly tell us if there is a relationship between movie factors, and the movie's revenue. 	

### Select a topic
- The relationship of movie factors ability to predict the movie's revenue.
- The movie factors:
    - Budget
    - Genres
      - Movie labled under multiple Genres 
      - Top 4 most common genres
    - Release_date
    - Revenue
    - Runtime
    - Vote_average
 
## Why We selected this topic:
- We enjoy watching movies, and wanted to see the relationship between factors of a movie, and the revenue. 
## Formulate a question
- Can movie factors predict the movie’s revenue?
- Which movie factors are better predictors of the movies revenue?
    - To use the reviews/score as a predictive (independent) variable instead of a dependent variable.
## Source Data
https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset
- CSV file 
- These files contain metadata for all 45,000 movies listed in the Full MovieLens Dataset. The dataset consists of movies released on or before July 2017. Data points include cast, crew, plot keywords, budget, revenue, posters, release dates, languages, production companies, countries, TMDB vote counts and vote averages.
- This dataset also has files containing 26 million ratings from 270,000 users for all 45,000 movies. Ratings are on a scale of 1-5 and have been obtained from the official GroupLens website.

## Perform exploratory analysis (Possible Analysis)
- Word Count of reviews 
- Most frequently used words before stop words are removed from the review
- Distribution of reviews ranking
- Word Cloud of most used words
- Single Regression 
- Multiple regression

##  Description of the data exploration phase of the project
- movies_metadata.csv: The main Movies Metadata file. Contains information on 45,000 movies featured in the Full MovieLens dataset. Features include posters, backdrops, budget, revenue, release dates, languages, production countries and companies.

![image](https://user-images.githubusercontent.com/106709942/198164383-87044d81-e89e-4962-b201-99492fa73984.png)

Process:
- Data set was downloaded .
- Needed factors were kept, while unnecessary ones were dropped.
- Cleaned, and created tables. 
- All tables were merged under one dataset.
- Dataset is ready for use. 



## Description of the analysis phase of the project (add more!)
- We decided on linear regressions as we are main method of analysis because:
when you want to know: How strong the relationship is between two variables (e.g. the relationship between movie factors and the movie’s revenue). The value of the dependent variable at a certain value of the independent variable (e.g. the amount of the movie factor at a certain level of revenue).
- We have tried linear regression, random forest, and relevance test. 

## Set up Repo
- Create 1 table base 

## ETL Process
We took the original data file and used the jupyter notebook file titled movies_samples2.ipynb to drop exess data columns and used the movie_genre_id.ipynb to loop through the data and return the id and genre for each movie.  We then took these two files and used the SQL code in PG Admin to join the to tables and return our final data set to use in our Machine Learning Model.

## Build simple ML (Machine Learning) Model
- Sample data 
    - RandomForest Regression 
    - Multiple regression

The question we set out to answer is what factors could be used to best predict movie revenue. To answer this, we chose to use random forest regression and multiple linear regression. The choice to use both was made to compare one against the other to see which model produced the best results. The random forest regression is an ensemble of decision trees. Each individual tree is created from a different sample of rows and at each node, a different sample of features is selected for splitting. Each tree then makes its own individual prediction which are average to create a single result. Multiple linear regression also known as multiple regression or MLR is a statistical technique that is used to predict the outcomes of a variable based on one or more separate variables. The dependent variable is the one that we want to predict and the variables that are used for the prediction are known as independent variables. Knowing each type of regressions basic functionality and application influenced our decision in choosing these two models.
When delving into the machine learning side of the project first we defined what question we were going to answer. Next, we needed to choose the types of regression models we were going to explore. The decision as stated before was based largely on the model’s capabilities but also on models that we have used before in the class challenges and lessons. For this we picked jupyter notebook files that accomplished the basic functionality we needed to import the data and perform the necessary preprocessing of the data set to perform the random forest regression. A lot of the random forest explained in class were more orientated to working with classification models. Because of this, we modified the file to perform regression.

## Description of feature engineering and the feature selection, including the decision-making process
As a group we decided to keep the features of the analysis limited to id, title, budget, genre, popularity, release date, and revenue. With feature engineering it enabled us to build more complex models than we could with only raw data. It also allowed us to build interpretable models from the amount of data we had available in the database. The feature selection helped us limit these features to a manageable number. This reduced the risk of overwhelming the algorithms or the interpretation of our model. We also used the feature importance function from the sklearn library to evaluate which specific features weighed more heavily in the predictive analysis.

## Description of how data was split into training and testing sets
The Train-Test-Split procedure involves taking a dataset and dividing it into two subsets. The first subset is used to fit the model and is referred to as the training dataset. The second subset is not used to train the model; instead, the input element of the dataset is provided to the model, then predictions are made and compared to the expected values. This second dataset is referred to as the test dataset. We   used a 20/80 split for our model’s predictive analysis. We used 80% of the dataset to train and the other 20% to test. Considerations we kept in mind when deciding how to split the data included whether we had sufficient data and computational efficiency. There are no optimal split ratios. The value can be adjusted to get better results. Different split ratios will work better for different data sets.




## Design Database
- Use PostGres
- Create tables for each factor

## Tableu dashboard
https://public.tableau.com/app/profile/kurt.otto/viz/FinalProject_16672563414390/FinalProjectStoryboard?publish=yes

http://127.0.0.1:5500/final.html#

- Description of the tools that will be used to create the final dashboard
    - HTML is used to host all pages of our dashboard from the explanation of the analysis to merging the tableau interactive page of the analysis
    - The dashboard will contain the following:
        - Main page with title, and short description.
        - Source page explaining the data used.
        - Result page with tableau intergrated, and drop down bar showing regression analysis results as well as heat maps.
- Description of interactive element(s) 
    - Tableau on the HTML page will be out interactive section of the dashboard.
    - Heatmaps showing the relationship between revenue, and factors.
    - drop down with each linear regression module. 
## Description of Communications Protocols:
- Contact on Slack for any help or questions needed. 
- Weekly tags up during class session.
- Set up zoom meetings if needed.

## Roles:
### Role 1: Amani Albalushi 
- Set up, and manage repository 
- Create README.md
- Manage Dashboard, and create visualizations (Tableau)
- Build Dashboard Frontend & Presentation
- HTML page
### Role 2: Kurt Otto 
- Extract source data 
- Perform exploratory data analysis 
- Build visualizations
- Build Frontend Interactivity
### Role 3: Jeff Mosley 
- Perform machine learning analysis
- Continue to develop and train ML model
- Build dashboard backend
### Role 4: Alexander Rivera 
- Perform ETL to process data
- Design and build database 
- Connect database to ML and backend

#Presentation Link:

https://docs.google.com/presentation/d/1c66mbawyzYyQgb2pCU98MmwLmdCjRU8aIeqzj0cFjEY/edit?usp=sharing
