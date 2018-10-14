#### Node HTTP Module
---
- **Core net working module supporting a high-performance foundation for a HTTP stack**
- **Using the module：<br>const http = require('http')**
- **Create a server :<br> const server = http.createServe(function(req,res){...})**
- **Starting the server:<br>server.listen(port,...);**
- **Incoming request message information available through the first parameter "req" <Br> req.headers.req.body,..**
- **Response message is constructed on the second parameter "res" <Br> - re.setHeader("Content-Type","text/html");<br>-res.statusCode = 200;**

### Node path Module
---
- **Using path Module：<Br> const path = require('path');**
- **Some example path methods:<br>path.resolve('./public'+fileUrl);<Br>path.extname(filePath);**

### Node fs Module
---
- **Use fs module in your application <br> const fs = require('fs')**
- **Some example fs methods<br>fs.exists(filePath,function(exists){...})**
- **fs.createReadStream(filePath).pipe(res);**