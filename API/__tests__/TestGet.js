const frisby = require('frisby');
const env = require('../config');
const api_url = env.baseUrl;

frisby.globalSetup({
  request: {
    headers: {
      'Content-Type': 'application/json'
           
    }
  }
});
  it("Test GET", function (){
    return frisby
        .get (api_url, {
            "name" : "Roomme Tech",
            "status" : "active",
            "gender" : "male"
        })
        .expect('status', 200)
        
        .then(function (res) {
          var data  = JSON.parse(res['_body']);
          console.log(data);
        })

        
      })