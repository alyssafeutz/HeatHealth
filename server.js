const http = require('http');
const fs = require('fs');
const port = 8000;

const findTemp = (curr_temp) => {

    var new_temp = 0;
    var data = 0;
    
    new_temp = (curr_temp-273.15)* 9/5 + 32 
    data = Number(new_temp).toFixed(2);
    return data;
    
}

const file = 'temp.txt';

const server = http.createServer(function (req, res) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) { console.error(err) }
        else {
            const obj = JSON.parse(data);
            curr_temp = obj.curr_temp 
            data = findTemp(curr_temp);
            res.write(data)
        }
        res.end()
    })
})


server.listen(port, function (err) {
    if (err) { console.error(err) }
    else {
        console.log('Server is listening on port ', port)
    }
})