# E-Music Class

> ##### Submitted by Shyam S R

> ###### Project designed as a model for online music class booking through a portal.

## Abstract of the project

The project is for students wanting to avail Carnatic Music / Harikatha kalakshepam (Story telling) classes online by Mrs.Girija (Music teacher from palakkad, settled in Chennai and Trivandrum). 

* A user can view her details, contact, gallery, register and book a slot from the website. 

* There are 2 types of user role :
1.  admin
2.  Student

* Admin user admits students, edit student details, delete student.

* Only logged in users will be able to access their details - Student's login page can view their details in a card.
* Admin user can view New Student details and Edit student detail menu sections where CRUD operations can be performed.

> **Note:**
 - A new user can be modified as Admin user - by chaning the role to "admin" in the DB and by default a user is created with Student role.
 - Created Registered user that is modified as admin will **NOT be displayed** in the **New Admissions, Modify student detail Menus** to avoid tampering of Admin user data via portal.


## Procedure to install and run the project

1.  Navigate to the project folder in the terminal. type **cd Server** 
2.  Type **npm install** and hit enter. This will install the project dependencies (see _Project Dependencies_ section below for more details) into the project folder.
3.  Type **node server.js** and hit enter. This will start the NodeJS / Express server.
4.  Open another terminal window, by clicking on the + sign and navigate to the same project folder, type **cd Server** and Type **npm install** and hit enter, this will install all the client related additional packages.
5. Type **ng serve** and hit enter. This will start the Angular server.
6.  Open a browser window, type **http://localhost:4200/** and hit enter.


## Project Dependencies

These will be automatically installed by **npm install** command mentioned above.
> Server side : 
1.  NodeMailer
2.  bcryptjs
3.  cors
4.  express
5.  jsonwebtoken
6.  mongoose
7.  bodyparser

>Client side :
1.  materialize
2.  angular/youtube-player
3.  rxjs

### Signup Page :
1. User must enter valid entries in all fields like email, password, phonenumber, slot preferred and click Register, else the user will not be allowed to Register.
2. A pop up alert will come up and user gets diverted to home page. 

### Admin User Functionality : 
1. Login to the DB (MongoDB Compass) - change the user role = "admin" instead of "Student", click update button.
2. In the website, Click Login Menu, enter the username and password for admin user.
3. User can view 2 additional menus - New Admissions, Modify student detail.
4. **New Admissions menu** - After successful login, user gets diverted to this, here all new user requests will come up as cards. User can click on **Add Student button** 

> **Note:**
 - An automated email will get triggered to end user and the student detail will disappear from this section and gets moved to **Modify student detail Menu**
 5. **Modify student detail Menu** - Here also we can find **add student button**, if it is missed out, but it will not appear, if the **field Admitted** is set to **true**. Admin user can click on edit button, to modify all fields **except Slot field** , as it is subject to practical decision making by the teacher, and Admin user can click on update or delete button- to update, or to remove the student details.
 6. Once operation is complete, user can click on logout from the Menu, User will be diverted to Home page of Smt. Girija.

### Student User:

1. Students will be able to login once the registation is successful with the username and password from the Login Menu in the website.
2. User can view their profile as a card from the Student Menu, where some fields will be blank, if the field has not been updated by Admin user.
3. All other fields and their values will be retrieved as per input provided by the user while registration.
4. **Logout menu** - once done - user will be diverted to Home page of Smt.Girija with Signup and Login Menu visible again in the Header section.

### Test Data :
- User must be created via Sign up form, as harsh password is required that is encrypted, Need to connect to MongoDB and change the value of the role : admin as mentioned before.
- By default the role is set to "Student" while a user is created via Sign up form.