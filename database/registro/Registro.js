var mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  SALT_WORK_FACTOR = 10;

var Usario = new mongoose.Schema({
  usuario: { type: String, required: true, index: { unique: true } },
  contraseña: { type: String, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true },
  fechaDeNacimieto: { type: Date, required: true }
  
});

Usario.pre('save', function (next) {
  var user = this;

  
  if (!user.isModified('password')) return next();    


  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);


    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

     
      user.password = hash;
      next();
    });
  });
});

Usario.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = {
  SALT_WORK_FACTOR,
  Usario,
  UsuarioModelo: mongoose.model('Userario', Usario),
}
