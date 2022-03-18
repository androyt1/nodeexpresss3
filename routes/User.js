const UserController = require('../controller/User');
const express = require('express');
const multer=require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })

const storage=multer.memoryStorage();

  const fileFilter=(req,file,cb)=>{
        if(file.mimetype.split('/')[0]==='image'){
            cb(null,true);
        }else{
            cb(new Error('File is not of the correct type'),false);
        }
  }

const uploads=multer({storage,fileFilter,limits:{fileSize:1024*1024*5,files:2}});

const router = express.Router();

router.route("/uploads").post(uploads.array('image'),UserController.register);
router.route("/uploads3").post(uploads.array('image'),UserController.register3);


module.exports = router;