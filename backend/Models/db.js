const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://gandhishivam122:1234@cluster1.kstgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

mongoose.connect(DB_URL)
    .then(() => {
        console.log('MongoDB is Connected...');
    }).catch((err) => {
        console.log('MongoDB Conn Error...', err);
    })
