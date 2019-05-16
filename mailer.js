var nodemailer = require('nodemailer');

var emails = [
  {
    service: 'gmail',
    secure: true,
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpass'
    }
  },
  {
      service: 'zoho',
      Port: 465,
      secure: true,
      auth: {
        user: 'youremail@yourdomain.in',
        pass: 'yourpass'
      }
  }
]


var i = 0
var csvFilePath = 'test.csv'
const csv = require('csvtojson')
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {

    for (var i = 0; i < jsonObj.length; i++) {

      var random = Math.floor(Math.random() * emails.length);

      console.log(random)

      const transporter = nodemailer.createTransport(emails[random]);

      const from = emails[random].auth.user

      console.log("from email : " + from)

      const mailOptions = {
        from: from, // sender address
        to: jsonObj[i].email.trim(), // list of receivers
        subject: jsonObj[i].subject.trim(), // Subject line
        html: jsonObj[i].message.trim(), // plain text body
        attachments: {
          filename: 'test.csv',
          path: 'test.csv'
        }
      };
       setTimeout(function() {
        transporter.sendMail(mailOptions, function(err, info) {
          if (err)
            console.log(err)
          else
            console.log(info);
        });
      }, 1000 * i)
    }


    // for (var i = 0; i < 100; i++) {
    //
    //   var random = Math.floor(Math.random() * emails.length);
    //
    //   console.log(random)
    //
    //   const transporter = nodemailer.createTransport(emails[random]);
    //
    //   const from = emails[random].auth.user
    //
    //   console.log("from email : " + from)
    //
    //   const mailOptions = {
    //     from: from, // sender address
    //     to: jsonObj[1].email.trim(), // list of receivers
    //     subject: jsonObj[1].subject.trim(), // Subject line
    //     html: jsonObj[1].message.trim() // plain text body
    //     // attachments: {
    //     //   filename: 'test.csv',
    //     //   path: 'test.csv'
    //     // }
    //   };
    //    setTimeout(function() {
    //     transporter.sendMail(mailOptions, function(err, info) {
    //       if (err)
    //         console.log(err)
    //       else
    //         console.log(info);
    //     });
    //   }, 1000 * i)
    // }
  })
