const userController = {};
const User = require('../models/user');

//palabra reservada async para identificar un metodo como asincronico
userController.getUsers = async (req, res) => {
    //await espera a que se busquen los elementos en la base
    const users = await User.find();
    res.json(users);
}

userController.createUser = async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
    res.json({
        'status': 'Empleado guardado'
    });
}

userController.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userController.editUser = async (req, res) => {
    //const { id } = req.params
    const user = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await User.findByIdAndUpdate(req.params.id, { $set: user}, {new: true});
    res.json({status: 'actualizado'})
};

userController.deleteUser = async (req,res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Usuario Eliminado.'
    });
}

module.exports = userController;