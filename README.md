# LUV Designs
LUV Designs is an app, that allows user to add any style design accessories to his or her home interior. Our App offers different styles and categories of our design items. 

<br>

## MVP

 **LUV Designs** MVP's are to create an app, where user will be able to sign in/sign up. Once creted account user can create a room(s) and match home decor items for any specific room. To achieve this goal I will use FULL CRUD on the Back end & Fron end.
<br>

### Goals

- Create an API to manage, store, and authenticate user information.
- API will also manage product inventory with full CRUD functionality.
- Fully responsive design utilizing Bootstrap or CSS framework.
- Users will be able sign up / sign in and browse current inventory
- Users will be able to create/edit & delete a room to find invertory for.
- Deployed to Heroku, Netlify

<br>

### Libraries and Dependencies


|     Library      | Description                                        |
| :--------------: | :-----------------------------------------         |
|      React       | _JavaScript library for building user interfaces._ |
|   React Router   | _React Router is used to define multiple routes in the application._|
| React Bootstrap | _React library that makes easier for UI foundation._|
|    RubyGems   | _tool designed to easily manage the installation of gems, and a server for distributing them._|
|  Ruby on Rails  | _A web-application framework that includes everything needed to create database-backed web applications ._|

<br>

### Client (Front End)

#### Wireframes

![imgAlt](https://i.imgur.com/yEGhA8o.png)

#### Component Tree

![imgAlt](https://i.imgur.com/XKRVpA2.png)


#### Component Architecture

``` structure

src
|__ containers/
      |__ MainContainer.jsx
__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Login.jsx
      |__ Register.jsx
      |__ Romms.jsx
      |__ DecorList.jsx
      |__ Details.jsx
      |__ Edit.jsx
      |__ Create.js
      |__ Delete.jsx
|__ services/
      |__ auth.js
      |__ config.jsx
      |__ items.js
      |__ rooms.jsx

```

#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Rails App    |    L     |     1 hrs      |     1 hrs     |    1 hrs    |
| Create models/schema|    L     |     1 hrs      |     1 hrs     |    1 hrs    |
| Create/populate seed data|    L     |     3 hrs      |     3 hrs     |    3 hrs    |
| Setup CORS          |    L     |   .30 hrs      |     0.30 hrs     |    0.30hrs  |
| Create controllers  |    L     |     2 hrs      |     2 hrs     |    3 hrs    |
| Create routes       |    L     |     2 hrs      |     2 hrs     |    3 hrs    |
| Create full CRUD    |    L     |     1 hrs      |     1 hrs     |    1 hrs    |
| Test full CRUD      |    L     |   .30 hrs      |     0.30 hrs     |    0.30 hrs  |
| Working Back end   |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create/Setup React App   |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create Layout/MainContainer  |    L     |     3 hrs      |     2 hrs     |    3 hrs  |
| Add basic CSS styling   |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create working CRUD |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Style with Bootstrap|    H     |     3 hrs      |     3 hrs     |     TBD     |
| Check & finish MVP  |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Styling Screens     |    L     |     5 hrs      |     5 hrs     |     TBD     |
| TOTAL               |          |     37 hrs     |     31 hrs    |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![imgAlt](https://i.imgur.com/k8GZGTf.png)

## Post-MVP

- Add Search functionality
- Add more tables & connections


## Code Showcase



## Code Issues & Resolutions

