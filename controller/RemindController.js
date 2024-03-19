const remindModel = require('../model/remindModel');

const createReminder = async (req, res) => {
  try {
    const { date, time, message, remindOption, destination } = req.body;

    const validOptions = ['email', 'phone'];

    if (!validOptions.includes(remindOption)) {
      return res.status(400).send({ status: false, message: "Invalid remindOption. It should be either 'email' or 'phone'." });
    }

    
    if (remindOption === 'email' && !isValidEmailFormat(destination)) {
      return res.status(400).send({ status: false, message: "Invalid email format." });
    }

    const datetime = new Date(date + 'T' + time); 

    const reminder = { datetime, message, remindOption, destination }; 

    const finalReminder = await remindModel.create(reminder);

    res.status(201).send({ status: true, message: "Successfully created", data: finalReminder });

  } catch (error) {

    console.log(error);

    res.status(500).send({ status: false, message: "Failed to create reminder" });
  }
};

function isValidEmailFormat(email) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(email);
}

module.exports = { createReminder };
