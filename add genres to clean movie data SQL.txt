Drop table if exists public.clean_movies; commit;
Create table public.clean_movies
(
	budget numeric,
	id varchar,
	popularity numeric,
	release_date date,
	revenue numeric,
	runtime numeric,
	title varchar,
	vote_average numeric
); commit;

Copy public.clean_movies from 'C:/Final_Project/clean_movies.csv' delimiter ',' csv header; commit;

Drop table if exists public.genres_id; commit;
Create table public.genres_id
(
	id varchar,
	genre_id varchar,
	genre varchar
); commit;

Copy public.genres_id from 'C:/Final_Project/genres_id_df.csv' delimiter ',' csv header; commit;

copy
(
	select a.id, title, budget, genre, popularity, release_date, revenue, runtime, vote_average
	from
	(
		select id, genre
		from public.genres_id
	) a
	left join
	(
		select budget, id, popularity, release_date, revenue, runtime, title, vote_average
		from public.clean_movies
	) b
	on a.id = b.id
	where budget is not null
)
to 'C:/Final_Project/movie_data.csv' csv header; commit;

