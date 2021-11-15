require('dotenv').config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_DB_URI);

module.exports = {
    mongoConnect: async function mongoConnect() {
        await client.connect();
    },

    mongoRead: async function mongoRead(chain, query) {
        var dbo = client.db("NFTs")
        return await dbo.collection(chain).find(query, query).sort({ contractAddress: 1 })
            .toArray()
            .then(items => {
                console.log(`Successfully found ${items.length} documents.`)
                return items;
            })
            .catch(err => console.error(`Failed to find documents: ${err}`));
    }
}