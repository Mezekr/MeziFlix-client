# MeziFlix-client

This is a frontend client for the MeziFlix movie app, which is the server-side of the application. The movies are stored in a MongoDB Atlas server and accessed through a RESTful API based on Node.js, deployed in Render. 

## Features and their corresponding React components/views.
 ### MainView component
  - Displays a list of movies's MovieCard componens
  -  Search and filter for a movie or list of movies.
  - Logout functionality
  - Navigation to profile view
  - Display navigation bar
    
### Navbar View
  - provides links to the home, profile, and logout pages.
  - Logout functionality
  - Navigate to Profile view
    
 ### LoginView
   - Allows users to log in with a username and password
    
  ### SignupView
  -   Allows a user to create an account
    
  ### ProfileView 
  - Dispays user data i.e Username, email, birthday
  - Allows a user to update the user's login details (e.g. Username, email)
  - Allows existing users to deregister
    
  ### Moviecard
  - Display the movie poster, title, and director's name.
  -  Lets the user open detailed view and see similar movies
  - Allows a user to add/remove movies to/from the Favourite Movies list.

    

# Developement Env and tools
  
  ## Tech Stack
  - React 
  - vite
  - API
  - Docker and Docker Compose
  - Javascript, HTML,CSS,SCSS
