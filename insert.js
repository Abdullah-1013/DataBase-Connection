const dbConnect = require('./mongodb');

const insertData = async () => {
    const db = await dbConnect();
    const result = await db.insertMany([
        { id: 1, name: 'Ahmed Khan', address: '123 Main St, Karachi' },
        { id: 2, name: 'Ayesha Malik', address: '456 Market Rd, Lahore' },
        { id: 3, name: 'Bilal Syed', address: '789 Garden Ave, Islamabad' },
    ]);
    console.log(result);
}

insertData();
