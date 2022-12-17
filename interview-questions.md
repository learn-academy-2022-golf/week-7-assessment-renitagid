# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: First of all, I have made this same mistake many times! You can fix this issue by generating a migration to add a new column, i.e. rails g migration add_foreign_key_column. Open the migration file and use add_column :students, :cohort_id, :integer
The name of the foreign key will be cohort id since it maps the primary key from cohort onto the student, and it will need to be an integer. Make sure to place it in the model for students, since that is where the additional column is needed. 

Researched answer: To add to my answer, I learned about another method called add_reference, which would be used like so: add_reference :students :cohort which will add a column entitled cohort_id to the students table.

2. Which RESTful routes must always be passed params? Why? 
Your answer: The RESTful routes are: index, show, new, create, edit, update, destroy. I am still familiarizing myself with these, but from my understanding, Index will always return all instances of the model and will likely not need params. Show needs to know which specific instance to look for to display and will require params (e.g. the id). New displays a form for users to submit data and will likely not require params. Create will update and save the data entered in the form from new, and must take params in order to pass the data to the database. Edit is similar to New and doesn't require params, and Update similar to Create will require them. Destroy does not require them as it just deletes the entire instance.


Researched answer:  It actually would depend on whether we are discussing strong params, or something more simple as passing an ID through the url. To modify my answer above, show, edit, update and destroy need to know which specific instance to call on. Create needs strong params, but sends it to the database without needing an id.

3. Name three rails generator commands. What is created by each?

Your answer: 
Model: generates a schema which describes a table with various columns, which can be populated with data, using the model as a sort of template
Migration: generates a migration file which can be used to make changes to the structure of the model. For example, you can add or remove columns, or update the type of data used in each column.
Controller: generates the controller file which is a place to put the methods fo your app, as well as a routes and views folder.

Researched answer: Another rails generator command is resource. This generates almost everything you need to work on the rails app including the model, controller, and routes. You can also generate an rspec install which adds the dependencies which are needed for rspec testing.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
This would call on the method index since it is displaying all the instances of the model student

action: "POST" location: /students
This would call on the method create, as it is saving a new instance of a student into the database

action: "GET" location: /students/new
This would call on the method new, it is displaying an html form for the user to fill with information to eventually be updated in the database

action: "GET" location: /students/2
This would call on the method show, it will be displaying a specific instance with the id of 2

action: "GET" location: /students/2/edit
This would call on the method edit, it will display an html form for the user to fill out to modify existing data in the database

action: "PATCH" location: /students/2
This would call on the method update, it will save the data from the parameters, overwriting the existing data for that instance

action: "DELETE" location: /students/2
This would call on the method destroy, which will remove the instance at the specified id from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
As a user, I want to see a title called To Do List with a list of tasks underneath
As a user, I want to see clickable checkboxes to the left of the words
As a user I want to see a text input field at the bottom of the todo list which allows me to add new tasks
As a user, when I hover over a task, I want to see an option to add a due date
As a user, I want to see a dropdown menu at the top with options to order the tasks "Recently Added" "Priority" or "Manual Sort"
As a user, when "Recently Added" is selected, the tasks will be sorted by the order that they were created by the user, with old tasks at the top and new tasks at the bottom
As a user, when "Priority" is selected, the tasks will be sorted with closest due dates at the top and those with no due date at the bottom
As a user, when Manual Sort is selected, I want to be able to click and drag my to do list items to different places in the list.
As a user, I want to see a button at the bottom that says "Hide completed tasks"
As a user, when I click the button at the bottom it will hide the tasks that have been checked from view, and change the button text to "Show completed tasks"
As a user, when I click the button that says "Show completed tasks" it will repopulate the tasks that have been checked off