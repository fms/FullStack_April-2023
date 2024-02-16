import { body } from "express-validator";
import { Time } from "../models/class";
export const checkName = [
  body('name').trim()
    .exists().withMessage('Name does not exist')
    .isString().withMessage('Name must be a string')
    .isLength({ min: 2, max: 12 }).withMessage('Name length must be between 2~12 characters')
];

export const checkPhoneNumber = [
    body('phonenumber').trim()
      .exists().withMessage('Phone number does not exist')
      .isLength({ max: 10 }).withMessage('Phone length must be up to 10 numbers')
  ];

  export const checkTime = [
    body('time').custom((value: Time) => {
      const time = new Time(value.hours, value.minutes);
  
      function isValidTime(time: Time): boolean {
        return time.hours >= 8 && time.hours <= 16 && (time.minutes === 0 || time.minutes === 30);
      }
  
      if (!isValidTime(time)) {
        throw new Error('Invalid time selected, time must be between 8 am to 16 pm in intervals of 30 minutes');
      }
  
      return true;
    })
];

export const checkDate = [
    body('date').exists().withMessage('Date does not exist')
  ];

  export const checkCity = [
    body('city').exists().withMessage('City does not exist')
  ];



export const createQueueSchema = [
  checkName,
  checkPhoneNumber,
  checkCity,
  checkDate,
  checkTime,
];