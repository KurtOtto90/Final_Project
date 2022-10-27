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
      - Top 5 most common genres
    - Release_date
    - Revenue
    - Runtime
    - Vote_average
 
## Why We selected this topic:
- We enjoy watching movies, and wanted to see the relationship between factors of a movie, and the revenue. 
## Formulate a question
- Can movie factors predict the movie’s revenue? 
    - To use the reviews/score as a predictive (independent) variable instead of a dependent variable
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



## Description of the analysis phase of the project
- We decided on linear regressions as we are main method of analysis because:
when you want to know: How strong the relationship is between two variables (e.g. the relationship between movie factors and the movie’s revenue). The value of the dependent variable at a certain value of the independent variable (e.g. the amount of the movie factor at a certain level of revenue).
- We have tried linear regression, random forest, and relevance test. 

## Set up Repo
- Create 1 table base 
## Build simple ML (Machine Learning) Model
- Sample data 
    - Single regression 
    - Multiple regression

## Design Database
- Use PostGres
- Create tables for each factor

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
