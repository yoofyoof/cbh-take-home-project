# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
ticket1: 
Create a new database table that saves custom ids and the facility id that corresponds to it or 
add a colulumn in existing database table to save the custom ids.
This ticket mostly requires mostly high level design effort. How we design to store the data now will
have a long term effort down the stream in future and we should discuss with database team for consultation and this should take 1wk.

ticket2:
Create a method called `createCustomIds` that will take the facility's created id and store it in database, this is the backend of the function.
We will check a couple of things, if the Custom has already created the Id, I'm assuming, this customId is modifiable, and the method will call a sql UPDATE function to update the customId.
If this is the first time Custom creates the Id, the method will do a INSERT function to store the customId.
This will take 3 days including testing. 

ticket3: 
Work on the front end that allows facility to create their own id. This will be a simply javascript change and the new customId will be sent to backend and stored in database(implemented from ticket2).
This will take 1-2 days including testing. 

ticket4: 
Create a helper method called `convertCustomIdToFacilityId` that will be used in existing `getShiftsByFacility` method and modify the parameter to allow taking customId.
The `convertCustomIdToFacilityId` method will be called if the customId parameter is not null, it will use the customId as the key to find the facilityId in the database and perform the existing flows to get the shifts.
This will take 1-2 days including testing.

