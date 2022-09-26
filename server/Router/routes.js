import Express from "express";



const route = Express.Router();


// defining add API and call addUser() function on post request sent
//Citizen
route.post('/add', addUser); //signup
route.get('/users', getUsers);  //login

route.post('/addPickUp', addPickUp); //add pick up  request to be scheduled
route.post('/trackPickUp', trackPickUp); //track the pick up request

route.get('/presentPickUps', getPresentPickUps);  //access persent pick up  request
route.get('/pastPickUps', getPastPickUps);  //access past pick up request
route.get('/futurePickUps', getfuturePickUps);  //access future pick up request that are scheduled 

route.delete('/deleteRequest', deleteRequest); //delete request

// route.get('/notify', notify);  //send notification
route.get('/getNotifications', getNotifications);  //access notifications

route.post('/addContact', addContact); //add request to be scheduled
//route.get('/request', getRequest);  //access request


//--------------------------------------------------------------------
//Admin
route.get('/pendingPickUps', getPendingPickUps); //get pending pick-up request to be scheduled
route.get('/availableTruck', getAvailableTruck);  //get information of available truck
route.get('/availableSlot', getAvailableSlot);  //get information of available time slot
route.get('/availableSlot', getAvailableSlot);  //get information of available time slot





export default route;