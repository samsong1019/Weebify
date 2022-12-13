// import { openDB } from 'idb';

// const initdb = async () =>
//   openDB('weebify_ecommerce', 1, {
//     upgrade(db) {
//       if (db.objectStoreNames.contains('weebify_ecommerce')) {
//         console.log('weebify_ecommerce database already exists');
//         return;
//       }
//       db.createObjectStore('weebify_ecommerce', { keyPath: 'id', autoIncrement: true });
//       console.log('weebify_ecommerce database created');
//     },
//   });

//   export const putDb = async (content)  => {
//     console.log('PUT to the database');
  
//     // Create a connection to the database database and version we want to use.
//     const contactDb = await openDB('weebify_ecommerce', 1);
  
//     // Create a new transaction and specify the database and data privileges.
//     const tx = contactDb.transaction('weebify_ecommerce', 'readwrite');
  
//     // Open up the desired object store.
//     const store = tx.objectStore('weebify_ecommerce');
  
//     // Use the .add() method on the store and pass in the content.
//     const request = store.put({ id: 1, value: content });
  
//     // Get confirmation of the request.
//     const result = await request;
//     console.log('🚀 - data saved to the database', result);
//   };
  
//   // TODO: Add logic for a method that gets all the content from the database
//   export const getDb = async () => {
//     console.log('GET from the database');
  
//     // Create a connection to the database database and version we want to use.
//     const contactDb = await openDB('weebify_ecommerce', 1);
  
//     // Create a new transaction and specify the database and data privileges.
//     const tx = contactDb.transaction('weebify_ecommerce', 'readonly');
  
//     // Open up the desired object store.
//     const store = tx.objectStore('weebify_ecommerce');
  
//     // Use the .getAll() method to get all data in the database.
//     const request = store.getAll();
  
//     // Get confirmation of the request.
//     const result = await request;
//     console.log('result.value', result);
//     return result?.value;
//   };
  
  
//   initdb();
