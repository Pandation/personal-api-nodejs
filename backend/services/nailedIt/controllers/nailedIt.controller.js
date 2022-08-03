const EmailTemplateModel = require("../models/emailTemplate.model")

module.exports.getAll = async (req,res) => {
    try {
        let data = await EmailTemplateModel.find();
        let results = await data.json()
        console.log(results)
        res.status(200).send({message: 'test'})
    } catch () {

    }
}
module.exports.create = (req,res) => {

}
module.exports.update = (req,res) => {

}
module.exports.delete = (req,res) => {

}
module.exports.getOne = (req,res) => {

}