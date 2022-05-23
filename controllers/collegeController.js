const fs = require('fs')
const filePathData = __dirname + "./../data.json"
const data = JSON.parse(fs.readFileSync(filePathData, { encoding: 'utf8' }))


const getData = (req, res) => {
    res.json(data)
}


const postData = (req, res) => {
    data.push(req.body)
    fs.writeFile(filePathData, JSON.stringify(data), (err) => {
        if (err) {
            console.log("error in writing data..");
        } else {
            res.status(201).json("Data inserted..")
        }
    })
}

const checkBody = (req, res, next) => {
    if (req.body.collegeName && req.body.city) {

        next()
    } else {
        return res.status(400).json({
            status: "fail",
            message: "Please provide collegename and city"

        })
    }


}



module.exports = {
    getData,
    postData,
    checkBody
}