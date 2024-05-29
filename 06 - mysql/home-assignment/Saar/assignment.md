> [!NOTE]
> The implementation uses the `Sakila Sample Database`. If you don't already have the sample installed, installation instructions may be found at https://dev.mysql.com/doc/sakila/en/

# Easy

Using the server we developed together as a starting point, add an API for querying films (the actual route is up to you). Don't implement all CRUD operations.

Implement:

1. An API for getting a list of all the films.
2. An API for getting a filtered list of films (use `req.query`). Filter on both the `TITLE` and `DESCRIPTION` columns.

# Medium

1. Extend the query to include the film language (join the `film` and `language` tables)
2. Extend the query to include the film category (join the `film`, `film_category`, and `category` tables).

# Advanced

1. Add a separate API to get a list of actors for the film using the film id.

> [!TIP]
> This API uses a sub-query to get the actors in the film.
>
> <details>
> <summary>Spoiler</summary>
>
> Use the following query:
>
> SELECT \*
> FROM sakila.actor
> WHERE actor_id IN (SELECT actor_id
> FROM sakila.film_actor
> WHERE film_id = ?)
>
> </details>

2. Write a React application to query the films. When listing matching films include the actors for each film.

> [!TIP]
>
> Do we have a method for caching query results?
>
> <details>
> <summary>Spoiler</summary>
> Query results caching is built into Redux Toolkit Query API (createAPI).
> </details>
