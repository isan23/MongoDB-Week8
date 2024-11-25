// Import mongoose
const mongoose = require('mongoose');

// MongoDB connection URI
const MONGO_URI = 'mongodb://localhost:27017/Week8';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => {
    console.error("Error occurred during connection: " + err);
});

db.once('connected', () => {
    console.log(`Connected to ${MONGO_URI}`);
});

// Define Schema and Model
const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    Gender: String,
    Salary: Number
});

const person_doc = mongoose.model('modelname', PersonSchema, 'personCollection');

// Task 1: Add a single document
//const doc1 = new person_doc({
//    name: 'Yousuf',
//    age: 44,
//    Gender: "Male",
 //   Salary: 3456
//});

//doc1
//    .save()
//   .then((doc) => {
//       console.log("New Article Has been Added Into Your DataBase.", doc);
//   })
//   .catch((err) => {
//        console.error("Error saving document:", err);
//   });

// Task 2: Adding Multiple Documents
//manypersons = [
//    { name: 'Simon', age: 42, Gender: "Male", Salary: 3456 },
//    { name: 'Neesha', age: 23, Gender: "Female", Salary: 1000 },
//    { name: 'Mary', age: 27, Gender: "Female", Salary: 5402 },
//    { name: 'Mike', age: 40, Gender: "Male", Salary: 4519 }
//];

// Insert multiple documents into the collection
//person_doc.insertMany(manypersons)
//    .then(function () {
//        console.log("Data inserted"); // Success
//    })
//    .catch(function (error) {
//        console.log(error); // Failure
//    });

// Task 3: (ii) Return the documents from collection with filteringcriteria
//person_doc.find()
//  .sort({salary: 1})  // Sort by salary in ascending order
//  .select('name Salary age')  // Select name, salary, and age fields only
//  .limit(10)  // Limit the number of results to 5
//  .exec()  // Execute the query
//  .then(docs => {
//      console.log('Showing multiple documents');
//      docs.forEach(function(Doc) {
//          console.log(Doc.age, Doc.name);  // Output the age and name
//      });
//  })
//  .catch(err => {
//      console.error(err);  // Log errors if they occur
// });

//var givenAge = 30;
//person_doc.find({ Gender: "Female", age: { $gte: givenAge } })
//  .sort({ Salary: 1 })  // Sort by Salary in ascending order
//  .select('name Salary age')  // Only return name, salary, and age
//  .limit(5)  // Limit the result to 5 documents
//  .exec()  // Execute the query
//  .then(docs => {
//      console.log(`Documents with Gender: Female and age >= ${givenAge}:`);
//      docs.forEach(function(doc) {
//          console.log(doc.age, doc.name);  
//      });
//  })
//  .catch(err => {
//      console.error(err);  
//  });

//Task 5: Write a query to return the total number of documents in the collection.
//person_doc.countDocuments().exec()
//    .then(count=>{
//    console.log("Total documents Count :", count)
//    }) .catch(err => { 
//    console.error(err)
//    })

//Task 6: Delete the documents for a given criteria
//person_doc.deleteMany({ age: { $gte: 25 } })
//    .exec()
//    .then(docs=>{
//    console.log('deleted documents are:',docs);
//    }).catch(function(error){ 
//    console.log(error);
//    });
    
//Task 7: Update all document of which the gender is female and set their salary to 5555
person_doc.updateMany({ Gender: "Female" },{Salary:5555})
    .exec()
    .then(docs=>{
    console.log("update") 
    console.log(docs); // Success
    }).catch(function(error){ 
    console.log(error); // Failure
    });
