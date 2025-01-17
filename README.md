#  Pokedex Fullstack Review

##  Goals for this repo:

Create an application that allows users to display a dynamic list of Pokemon, filter by type, and edit/create new Pokemon.

Implement the functionality detailed in the following steps:

----

###  Step 1

- Build out an express server to serve the front end.
    DONE
- Create a script for starting the server and for `webpack`.
    DONE
- Refactor your client to dynamically render from your React files.
    DONE

> You will know if you have done this correctly if you see Bulbasaur, Ivysaur, and Venasaur on the page.

----

###  Step 2

- Using `mysql`, build out the back-end. Use `schema.sql` to create and seed the "pokedex" database.
  DONE
- Establish a database connection in `db/index.js`
  DONE

----

###  Step 3

- Create a `GET` route to display all the Pokemon in your database onto the page. You should render each Pokemon's name, type, and image.
  DONE
- Refactor the hardcoded `select` dropdown menu to display all of the types stored in the database.
  DONE
- Filter the displayed Pokemon to match the type selected in the dropdown menu.
  DONE
- Re-display all the Pokemon on the page when 'Show All' is clicked.
  DONE

----

###  Step 4

- On click of the Pokemon's name, enable editing through an input field. On 'submit', your component should re-render so the updated name is displayed.
  DONE

- Create a delete button to delete a Pokemon. On click of the delete button, the Pokemon should be removed from the page.
  DONE

----

###  Stretch Goal

- Implement an 'Insert' button and corresponding `POST` route so you can add a Pokemon to the list. DONE