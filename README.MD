# CONTRACT DATA ENDPOINT
<summary><b> ENDPOINT EXAMPLE </b></summary>
The information we are trying to retreive from mongoDB is sorted by chain.

Since this is the case, we will need to give two parameters.

Examples of sorting by chain:

    1. .../findcontract/Ethereum/...
    2. .../findcontract/Polygon/...
    3. .../findcontract/Moonriver/...

The second parameter is the contract address you are looking for.

Examples of getting address data:

    1. .../findcontract/Ethereum/0xf102F6d0759B0cf6B5B61745ec51fc20F7F67A21
    2. .../findcontract/Polygon/0xf102F6d0759B0cf6B5B61745ec51fc20F7F67A21
    3. .../findcontract/Moonriver/0xf102F6d0759B0cf6B5B61745ec51fc20F7F67A21

<br/>
<summary><b> ENV EXAMPLE </b></summary>
You will need a ".env" file for an environment variable

Example: 

MONGO_DB_URI = "Your mongoDB"
<br/>