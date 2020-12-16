// const Usuario = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../models');



exports.signin = async(req, res, next) =>{
    try{
        const user = await models.Usuario.findOne({ where: {email: req.body.email}});

        if(user){

            // console.log(req.body.password);
            // console.log(user.password);        
            // console.log(user.email);

            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    name: user.nombre,
                    email: user.email,
                    rol: user.rol
                }, 'config.secret', {
                    expiresIn: 86400,
                }
                );
                res.status(200).send({
                    auth: true,
                    tokenReturn: token // accessToken: token <- asi debe ir en el reto
                    // user: user //no es necesario si no se estaria enviando la contraseña al front y el head y todo
                })
            }else{
                res.status(401).json({
                    error: 'Error en el usuario o contraseña'
                })
            }
        }else{
            res.status(404).json({
                erro: 'Error en el usuario o contraseña'
            })
        }
    }catch(error) {
        res.status(500).send({
            message:'Error ->'
        })
        next(error);
    }   
};

exports.register = async(req, res, next) =>{
    try{
        const user = await models.Usuario.findOne({ where: {email: req.body.email}});
        if(user){
            res.status(409).send({
                message: 'Lo siento hay un conflicto en el sistema, quizás este email ya se encuentre registrado'
            })
        }else{
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const user = await models.Usuario.create(req.body);
            res.status(200).json(user);
        }
    }catch(error){
        res.status(500).send({
            message: 'Error ->'
        })
        next(error);
    }
};

exports.list = async(req,res,next) =>{
    try{
        const user = await models.Usuario.findAll();
            if(user){
                res.status(200).json(user)
            }
            else{
                res.status(400).send({
                    message: 'No hay usuario en el sistema'
                })
            }
        
        }    
        catch (error){
        res.status(500).send({
            message: 'Error!!'
        })
        next(error);
    }
};

exports.update = async(req, res, next) =>{
    try {
        const user = await models.Usuario.findOne({ where: {email: req.body.email}});
        if(user){
            const user = await models.Usuario.update({ nombre: req.body.nombre},
                {
                    where:{
                        email: req.body.email
                },
                // returning: true
                });
                res.status(200).json(user);
        }else{
            res.status(404).send({
                message: 'Usuario no encontrado'
                })
            }
    }catch(error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};
