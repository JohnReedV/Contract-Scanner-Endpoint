const express = require('express');
const app = express();
const mongo = require("./mongo");

async function expressGet() {
    await mongo.mongoConnect();

    app.get('/contract/:chain/:address', async (req, res) => {
        var query = req.params.address;
        var chain = req.params.chain
        var data = await mongo.mongoRead(chain, { ContractAddress: query });
        console.log(data);
        res.send(data);
    })
}
expressGet();

app.listen(3002, () => console.log('Listening on port 3002'));
//0xf102F6d0759B0cf6B5B61745ec51fc20F7F67A21
