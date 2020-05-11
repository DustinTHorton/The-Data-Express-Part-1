/*****************************************************

			Assignment 1

			INSTRUCTIONS

1.  Do all your work in the Northwind and DBT130 databases.

2.  Complete all queries and answers in this file, with each query 
	directly below its question.  Your queries should not be commented out.  Do not delete
	the question text or renumber the questions. I should be able to execute this script
	on my machine without issue (no sytax error.)

3.  Do not paste the query results into this file, unless specifically requested
	in the question.

4.  Submit this file with your answers in the LMS by the deadline as a .sql file.

5.  For clarity: "List" means Select (* unless otherwise specified).

6.  All responses are to be SQL queries unless the question specifies ENGLISH.

7.  There is no need for Group by or Having clauses in any response.

For full credit, there must be no syntax errors in this file.
(I should be able to execute it on my machine without making changes)

Plain English answers should be commented out, like these instructions
or the questions themselves.

*****************************************************/
/* 1.1
Create a database called DBT130.
*/

--CREATE DATABASE DBT130

/* 2.1
Switch to the new DBT130 database.
*/

USE DBT130;

/* 3.1
Add a table called People to the database with the following
columns: first name, last name, date of birth, phone number,
and all the fields necessary for a full US address.  Use 
data types for each field that match and will be able to contain
data for people living in the US.
*/

CREATE TABLE dbo.Peoples (FirstName VARCHAR(50), LastName VARCHAR(50), BirthDate DATE, phoneNumber VARCHAR(12), USAddress VARCHAR(100), city VARCHAR(50), homeState VARCHAR(2), zipCode VARCHAR(9))

/* 3.2
Add two people to the People table, populating all columns
for each person.
*/

INSERT dbo.Peoples
(FirstName, LastName, BirthDate, phoneNumber, USAddress, city, homeState, zipCode)
VALUES
('Jerry', 'Smith', '1979-05-03', 801-556-6789, '289 Serpant Street', 'Salt Lake City', 'UT', 84122)
INSERT dbo.Peoples
(FirstName, LastName, BirthDate, phoneNumber, USAddress, city, homeState, zipCode)
VALUES
('Robert', 'Graham', '1999-11-27', 720-993-5567, '662 Alberto Road', 'Denver', 'CO', 80605)

/* 3.3
Select all the people in the People table.
*/

Select *
From dbo.Peoples

/* 3.4
Assume you made a mistake on the zip code for one of the 
people.  Fix the mistake with an update.
*/

UPDATE dbo.Peoples
SET zipCode = '80603'
Where FirstName = 'Robert'

/* 3.5
Make sure your update worked by selecting the row
for just that person.
*/

SELECT *
from dbo.Peoples
Where FirstName = 'Robert'

/* 3.6
Delete the row you didn't update.
*/

Delete
From dbo.Peoples
where FirstName = 'Jerry'

/* 3.7
Make sure the row you updated is still there with 
a select.
*/

Select *
From dbo.Peoples

/* 3.8
Delete all the remaining rows in the 
People table.
*/

Delete
From dbo.Peoples
where FirstName = 'Robert'

/* 4.1 ENGLISH
What happens when you run a select on the People table, which
is now empty?  What is returned?  ("Nothing" isn't really correct.  
Something _is_ returned)
*/

--Null is returning, the only thing that remains is the Column headings.

/* 4.2
Remove the People table from the DBT130 database. (research and use a drop table statement)
*/

Drop Table dbo.Peoples

/* 4.3 ENGLISH
Now try selecting from a table that doesn't exist.  What
is returned?  (Again, "nothing" isn't correct)
*/

--An error is returned saying "Invalid object name 'dbo.Peoples'".

/* 5.1
Change contexts to the Northwind database.
*/
USE Northwind

/* 6.1
Return all the Employees who live in London.
*/

Select EmployeeID, FirstName, LastName, City
from Employees
where City ='London'

/* 6.2
Add an Employee to the employees table. (Read the next question
before starting this one... they're related)
*/
Set IDENTITY_INSERT Employees ON
INSERT Employees(EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City, Region, PostalCode, Country, HomePhone, Extension, Notes, ReportsTo)
Values
(69420, 'Gorham', 'Joshua', 'Student', 'Student Advisor', '2000-12-17', '2019-09-20', '343 South 500 East', 'Utah', 'West', 84102, 'U.S.A', '720-917-9051', '1', 'Hello I exist', 5)

/* 6.3 ENGLISH
List here any headaches, problems, or specific hoops you had
to jump through to be able to add a new employee.
*/

--There was the Identitiy Insert being turned off when it needed to be on, County was too long, Extension was too long, and the Reportsto was suppose to be an int, not a varchar.

/* 7.1 ENGLISH
What are at least two ways you can discover the table schema
for a table you're unfamiliar with, meaning the data types, 
key fields, and whether fields allow nulls or not.
*/

-- Make the table by right clicking it and see it's values, Expand the tables in the Object Explorer to see all the columns.

/* 8.1 ENGLISH
What are the advantages and disadvantages of requiring a field
in a table to be "Not Null"?
*/

--It can tell the user that there is something yet to be added while still having something inside the data



Update dbo.Peoples
set phoneNumber = 8015566789
where FirstName = 'Jerry'

Update dbo.Peoples
set phoneNumber = 7209935567
where FirstName = 'Robert'