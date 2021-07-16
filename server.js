var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

app.post("/api/test", function (req, res) {
    req.on("data", async function (data) {
        console.log(`data: ${data}`);
        let result = `data [${data}] sent to API`;
        console.log(`result: ${result}`);
        return res.send(result);
    });
});

app.listen(8000, function () {
    console.log("App running on port 8000");
});
