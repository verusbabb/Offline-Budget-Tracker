# Offline-Budget-Tracker
With this app a user is able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, the entries populate the total when brought back online.

Offline Functionality:

- Enter deposits offline
- Enter expenses offline

When brought back online:

- Offline entries should be added to tracker.

## User Story
```
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection 
  is back online.
```
## Developer Challenge
The developer was provided some working front-end code and a MongoDB at the start of this project. The developer 
task to meet the functionality described in the user story was as follows:
- Create a service-worker that would locally cache html, css, and required JavaScript files for better performance and to enable an offline experience
- Set-up IndexedDB functionality to enable storing deposit and withdrawl entries while offline, and ensuring that those transactions would post to the database when a user came back online.

## Key Tools Employed
- Mongoose
- Service-worker/local cache
- IndexedDB

## Screenshot of Working Output

![](https://github.com/verusbabb/Offline-Budget-Tracker/blob/main/public/images/budget_tracker.png)




