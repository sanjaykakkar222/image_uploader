const mongoose=require('mongoose');
const ImageSchema=mongoose.Schema({


    img_name:
    {

        type:String,
        required:true
    },

    img_path:
    {

        type:String,
        required:true
    }

  
   
   
   
   });
   
   
   const Image=module.exports=mongoose.model('Image',ImageSchema);