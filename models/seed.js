const mongoose = require('mongoose');
const UserModel = require('./users');

const seedUsers = [
    {
    firstName: 'merlin',
    lastName: 'Merlin',
    dob: '01/01/2001',
    email: 'marlin@gmail.com',
    phone: '203-123-1234',
    category: 'patient',
    username: 'merlin1',
    password: 'countryroads1',
    },
    {
    firstName: 'lance',
    lastName: 'Lenny',
    dob: '01/01/2001',
    email: 'marlin@gmail.com',
    phone: '203-123-1234',
    category: 'patient',
    username: 'merlin1',
    password: 'countryroads2',
},
{
    firstName: 'jenny',
    lastName: 'Katie',
    dob: '01/01/2001',
    email: 'marlin@gmail.com',
    phone: '203-123-1234',
    category: 'patient',
    username: 'merlin1',
    password: 'countryroads3',
    },
  ];
  // Seeding function
  const seedDB = () => {
    // Declare db name, URI, and instantiate connection
    const dbName = 'patientDB'
    const dbURI = `mongodb://localhost:27017/${dbName}`;
    const dbConnection = mongoose.connection;
    
    dbConnection.on('error', (err) => console.log('DB Connection Error: ', err));
    dbConnection.on('connected', () => console.log('DB Connected to: ', dbURI));
    dbConnection.on('disconnected', () => console.log('DB Disconnected'));
    
    mongoose.connect(
      dbURI,
      { useNewUrlParser: true },
      () => console.log(`${dbName} db running on ${dbURI}`)
    );
    UserModel.collection.drop()
    UserModel.create(seedUsers, (err, newUsers) => {
      if (err) {
        console.log('Seeding error: ', err);
      } else {
        console.log('Seeding OK: ', newUsers);
      }
      dbConnection.close();
    });
  }
  seedDB();

  module.exports = seedUsers;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  