const express = require('express');
const app = express();
const mongo = require("./mongo");

async function expressGet() {
    await mongo.mongoConnect();

    /*In mongoDB our NFTs are sorted by chain therefore the first parameter is chain.
      The second parameter for the endpoint is ContractAddress to return all instances of that address*/
    app.get('/findcontract/:chain/:address', async (req, res) => {
        //assign params to variables
        var query = req.params.address;
        var chain = req.params.chain
        //look for data in mongoDB
        var data = await mongo.mongoRead(chain, { ContractAddress: query });
        console.log(data);
        //send our response
        res.send(data);
    })
}
expressGet();

app.listen(3002, () => console.log('Listening on port 3002'));
