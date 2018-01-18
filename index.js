const express = require('express')
const app = express()
var data = require("./data.json");
var YAML = require('json2yaml')


data.forEach(element => {
    let size = JSON.stringify(element).length;
    let length = Object.keys(element).length;
    element['length'] = length;
    element['size'] = size;
});

ymlText = YAML.stringify({
    "foo": "bar"
  , "baz": "corge"
  });

  console.log(ymlText);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'));