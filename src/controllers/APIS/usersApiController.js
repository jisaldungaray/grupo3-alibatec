const db = require('../../database/models')
const sequelize = db.Sequelize; 

const usersApiController = {
    userList: (req, res) => { 
        db.Usuarios.findAll()
        .then (users => {
            return res.status(200).json({
                count: users.length,
                data: users,
                detail: "/api/users/:id"
            })
        })
    },
    detail: (req, res) => {
        db.Usuarios.findByPk(req.params.id)
        .then(user => {
            res.status(200).json({
                data: {
                    id: user.id, 
                    name: user.name, 
                    apellido: user.last_name, 
                    email: user.email,
                    image: user.image
                }
            })
        })
    }
}

module.exports = usersApiController