import axios from 'axios'


export default function handler(req, res) {

    const inputInfo = req.body

    const endpoint= `https://maps.googleapis.com/maps/api/distancematrix/json?&destinations=${inputInfo.destination}&origins=${inputInfo.origin}&key=${process.env.API_KEY}`

    axios(endpoint)
        .then(response=> {
            res.status(200).json(response.data)})
        .catch(error=> console.log(error))

  }
  