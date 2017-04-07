import fs from 'fs';

fs.readdir(`${__dirname}/docs`, function(err, files) {
  let data = {};
  files.forEach(function(file, i) {
    let f = require(`${__dirname}/docs/${file}`);
    if (f.content && f.content[0] === '{') {
      let d = JSON.parse(f.content);
      switch (d.type) {
        case 'api':
          console.log(d.name);
          data[d.name] = d;
          break;
        case 'component':
          console.log(`<${d.componentName}>`);
          data[d.componentName] = d;
          break;
      }
    }
  });
  fs.writeFile(`${__dirname}/site/src/Data.js`, `module.exports=${JSON.stringify(data)};`, function(err) {
    if (!err) {
      console.log('done');
    }
  })
});
