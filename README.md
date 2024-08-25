# libraryBook
To setup this project you have to take clone and do npm i 

To setup a DB you have to install mysql in your system if not installed.
once mysql is install create a db name as "libraryDb"
If you have setup mysql with different username and password other than "root" and "password" then you have to do changes in the common/connection.ts file.


To run the project you have to run "npm run start".
Here, we have used 2 collection/table name as users and books. 
When you run this command we will connect the database. If the database connection successfully established then we will check this tables are exists or not. if these tables are not in db then it will auto generate in db.

