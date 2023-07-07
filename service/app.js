const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

const data = [
    {
        "text": "中国银行",
        "id": 1
    },
    {
        "text": "中国邮政",
        "id": 2
    },
    {
        "text": "中国移动",
        "id": 3
    },
    {
        "text": "上海天气",
        "id": 4
    },
    {
        "text": "中国电信",
        "id": 5
    },
    {
        "text": "上海市政府",
        "id": 6
    },
    {
        "text": "上海人口",
        "id": 7
    },
    {
        "text": "北京天气",
        "id": 8
    },
    {
        "text": "北京时间",
        "id": 9
    },
    {
        "text": "北京旅游攻略",
        "id": 10
    }
]

app.get('/api/get-google-files', async (req, res) => {
    setTimeout(() => {
        console.info(data)
        res.send({
            success: true,
            resources: data,
        });
        return
    }, 200)

    // const url = 'https://drive.google.com/file/d/1iT2750MGszpzi5mrCHCFmF8HYsCiHA0I/view';
    // try {
    //     const response = await axios.get(url);
    //     res.send(response.data);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send('Error occurred while fetching the data.');
    // }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
