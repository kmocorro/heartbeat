const csvFilePath = 'public/Trace_HB_Summary.csv'
const csv = require('csvtojson')

export default function handler(req, res) {
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
      res.status(200).json(jsonObj)
    })
  
}