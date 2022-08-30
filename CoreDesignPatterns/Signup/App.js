const SignupBuilder = require('./SignupBuilder');

// Signup.create('John Doe', 'john@email.com', 25, 'johndoe.jpg', 'John_D', ['JavaScript','Node.js'], ['Node.js'], true, false);

new SignupBuilder('Yusuf Eren', 'erenyusuf170@gmail.com', 20)
  .setPhoto('yusuf_eren.jpg')
  .setNick('yusuf_eren')
  .setAdmin()
  .create();