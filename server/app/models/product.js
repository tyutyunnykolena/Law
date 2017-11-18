let mongoose=require('mongoose');

let Schema=mongoose.Schema;

let productSchema = new Schema({

        title:{type:String,required:title.length>10},
    
        image:{type:String,required},
    
        description:{type:String,required:description.length<1000},
    
        price:{type:Number,required:price>0},
    
        quantity:{type:Number,required:quantity>0},
    
        category:{type:String,required},
    
        // start_date:{type:Date,default:''},
    
        // end_date:{type:Date,default:''},
    
        // start_price:{type:Number,default:0},
    
        // step:{type:Number,default:0},
    
        // card_number:{type:Number,required:card_number.length==16},
    
        // card_month:{type:Number,required:card_month.length>0 && card_month.length<13},
    
        // card_year:{type:Number,required:card_year.length>2017 && card_year.length<2026},
    
        // card_cvc:{type:Number,required:card_cvc.length==3},
    
        // create_at:{type:Date,default:Date.Now}

});

module.exports = mongoose.model('product',productSchema);