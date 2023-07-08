const express = require('express');
const axios = require('axios');
const data = require('./data.json')

const app = express();
const port = 3001;
const fileId = '1iT2750MGszpzi5mrCHCFmF8HYsCiHA0I';

app.get('/api/get-google-files', async (req, res) => {
    try {
        setTimeout(() => {
            console.info(data)
            res.send({
                success: true,
                resources: data,
            });
            return
        }, 200)

        const response = await axios.get(`https://drive.google.com/file/d/files/${fileId}?alt=media`, {
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while fetching the data.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});