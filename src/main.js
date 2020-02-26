  require("babel-runtime/regenerator")
  require("babel-register")
  require("webpack-hot-middleware/client?reload=true");
  require('./main.css');
  require('./index.html')
  require('./app')

  let a =  async () => {
    await console.log(3)
  }

  a();
  console.log(45);




