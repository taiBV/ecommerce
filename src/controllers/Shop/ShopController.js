class ShopController{
    constructor() {
        console.log('constructor ShopController')
    }
    signUp(req,res,next){
        // console.log('signUp')
        return res.json({
            code: 1,
            msg : 'signUp 22'
        });
    }
}
module.exports = ShopController
