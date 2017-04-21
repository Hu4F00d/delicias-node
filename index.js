var moltin = require('moltin')({
  publicId: 'PPYnkFxqKAI8ZjNxeWOPRKXg0k3a5oyyKsFkDIFUPI',
  secretKey: 'VglT9eNdKQLZagPhb9n2YqmJpe5yWtUjI5U0BirdnN'
});

moltin.Authenticate(function() {
  moltin.Brand.Create({
      title:       'Brillats Savarin',
      slug:        'brillats-savarin',
      status:      1,
      description: 'Super tasty pastries.',
      custom: 'just checking'
  }, function(brand) {
      console.log(brand);
  }, function(error) {
      console.log('Error', error.message);
  });
});
