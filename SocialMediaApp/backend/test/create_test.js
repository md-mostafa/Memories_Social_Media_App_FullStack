
//import the User model
import User from '../models/user.js';
import assert from 'assert';
  
describe('Creating documents in MongoDB', () => {
    it('Creates a New User', async () => {
        //  const newUser = new User({ name: 'Shriyam', email:'Shriyam@gmail.com', password:'123', id:'ssdfsd' });
        const newUser = new User({  email:'Shriyam@gmail.com', password:'123', name: 'Shriyam', id:'ssdfsd' });
        newUser.save() // returns a promise after some time
            .then(() => {
                //if the newUser is saved in db and it is not new
                assert(!newUser.isNew);
                done();
            });
    }).timeout(20000);
});