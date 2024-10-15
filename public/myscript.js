console.log('Check if correctly connected')
async function AsyncFunction(){
    try {
      const response = await fetch("http://localhost:3000/users", {method: "POST"}, {
        body: JSON.stringify({ username: "example" })}
      , console.log($method))
    } catch (error){
      console.log(`The Promise failed and the error is ${error}`)
    }
  }

 AsyncFunction()

