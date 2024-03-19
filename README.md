# Symplique-Solutions_Assign
Assignment

This project set reminders easily using Node.js, Express.js, and MongoDB.

How to start this:
Clone this repository.
Install dependencies using npm install.
Start the server by running npm start.

Testing tool:
I have used  Postman for testing  to send a POST request to http://localhost:3000/create with the following JSON body.

Here is the sample input:

{
    "date": "2024-03-18",
    "time": "14:30:00",
    "message": "Don't forget the meeting!",
    "remindOption": "phone",
    "destination": "123456789"
}


{
    "status": true,
    "message": "Successfully created",
    "data": {
        "datetime": "2024-03-18T14:30:00.000Z",
        "message": "Don't forget the meeting!",
        "remindOption": "phone",
        "destination": "123456789",
        "_id": "65f9383f6c5eb5b1eed2a336",
        "createdAt": "2024-03-19T07:01:19.892Z",
        "updatedAt": "2024-03-19T07:01:19.892Z",
        "__v": 0
    }
}

