const bcrypt = require('bcrypt');
const User = require('../models/user')


exports.register = async (username, password) => {

    const checkUser = await User.findOne({username});

    if (checkUser) {
        throw new Error ('Username already exists!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return {"message": " Registration successful"};

}
