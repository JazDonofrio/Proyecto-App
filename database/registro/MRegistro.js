const { registro } = require("./Registro");

const NuevoUsuario = (usuario, contraseña) => new Promise((resolve, reject) => {
  var usuarioNuevo = new registro({
    usuario,
    contraseña,
  });

  usuarioNuevo.save(function (err) {
    if (err) reject(err);

    registro.findOne({ usuario: usuario }, function (err, usuario) {
      if (err) reject(err);

      usuario.comparePassword(contraseña, function (err, isMatch) {
        if (err) reject(err);
        resolve(`${contraseña}: ${isMatch}`);
      });
    });
  })
})


const UserLogin = (username, password) => new Promise((resolve, reject) => {
  UserModel.findOne({ username: username }, function (err, user) {
    if (err) reject(err);
    console.log("USER: ", user)
    if (user)
      user.comparePassword(password, function (err, isMatch) {
        if (err) reject(err);

        if (isMatch)
          resolve(user._id);
        else
          reject("Password Incorrect")
      });
    else
      reject("Username Incorrect")
  });
})


module.exports = {
    NuevoUsuario,
    UserLogin
}
