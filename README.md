# Final_Project
## Week One:
### Select a topic
- The relationship of movie factors to predict revenue
- The movie factors:
    - Budget
    - Genres
      - Movie labled under multiple Genres 
      - Top 5 most common genres
    - Release_date
    - Revenue
    - Runtime
    - Vote_average
    - language (english or all of them) 
    
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

## Set up Repo
- Create 1 table base 
## Build simple ML (Machine Learning) Model
- Sample data 
    - Single regression 
    - Multiple regression

## Design Database
- Use PostGres
- Create multiple tables for each 

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
