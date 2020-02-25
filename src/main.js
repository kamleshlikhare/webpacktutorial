  require('@babel/polyfill')
  require('./main.css');
  require('./index.html')

  let a =  async () => {
    await console.log(3)
  }

  a();
  console.log(45);




