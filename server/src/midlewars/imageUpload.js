const express = require('express');
const multer  = require('multer');
const path = require('path');

const allowedFileTypes = ['png', 'gif', 'jpg', 'jpeg']



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb received errorstatus(null means no error and true means error) and Folder destination where file to uploaded. 
      cb(null, './public/images/users')
    },
    // filename property can be a string or a function returns the file name which is going to be uploaded.
    filename: function (req, file, cb) {

        const allowedImageTypes = allowedFileTypes.map(fileType=>`image/${fileType}`)
        if(!allowedImageTypes.includes(file.mimetype)){
            cb(new Error("image type is not supported"), false)
        }
        //extname receives file name and returns file extension. 
        const fileExt = path.extname(file.originalname);
        //rename the file name.
      const finalFileName = req.body.name + Date.now()+fileExt;
      cb(null, finalFileName)
      console.log("Original Image Name: ", file.originalname);
    }
    // filter option is also available. 
  })
  
  const upload = multer({ storage: storage })


  module.exports = upload;