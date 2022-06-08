const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://l-stend:blanalala@cluster0.gffwf.mongodb.net/show-MeAround?retryWrites=true&w=majority'
  )
  .then(() => console.log('🦖🦖 db running 🦖🦖'))
  .catch((err) => console.log(err));
