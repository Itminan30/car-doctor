const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// require("crypto").randomBytes(64).toString("hex")
// middlewere
app.use(cors());
app.use(express.json());

// mongodb-s


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wljhrnc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const verifyJwt = (req, res, next) => {
    console.log("hitting the verify jwt");
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).send({error: true, message: "unauthorized access"});
    }
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
        if(error){
            return res.status(403).send({error: true, message: "unauthorized access"});
        }
        req.decoded = decoded;
        next();
    })
}

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // collections
        const serviceCollection = client.db("carDoctor").collection("services");
        const bookingCollection = client.db("carDoctor").collection("bookings")

        // jwt
        app.post("/jwt", async(req, res) => {
            const user = await req.body;
            console.log(user);
            const token =  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h"});
            res.send({token});
        })

        // get all services
        app.get("/services", async (req, res) => {
            const cursor = serviceCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })
        // get a specific service
        app.get("/service/:id" ,async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await serviceCollection.findOne(query);
            res.send(result);
        })

        // get booking with query
        app.get("/bookings", verifyJwt , async (req, res) => {
            const decoded = req.decoded;
            console.log("came back after verify", decoded);
            if(decoded.email !== req.query?.email){
                return res.status(403).send({error: true, message: "forbidden access"});
            }
            let query = {};
            if (req.query?.email) {
                query = { email: req.query.email };
            }
            const result = await bookingCollection.find(query).toArray();
            res.send(result);
        })

        // post for booking
        app.post("/bookings", async (req, res) => {
            const booking = req.body;
            const result = await bookingCollection.insertOne(booking);
            res.send(result);
        })

        // patch method for update booking 
        app.patch("/bookings/:id", async (req, res) => {
            const id = req.params.id;
            const updatedBooking = req.body;
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    status: updatedBooking.status
                },
            };
            const result = await bookingCollection.updateOne(filter, updateDoc);
            res.send(result);
        })

        // delete for delete a specific booking
        app.delete("/bookings/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await bookingCollection.deleteOne(query);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


// mongodb-e

// 
app.get("/", (req, res) => {
    res.send("Car Doctor Server Running");
})

// 
app.listen(port, () => {
    console.log("Server Running on Port:", port);
})