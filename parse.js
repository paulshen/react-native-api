import fs from 'fs';

fs.readdir(`${__dirname}/docs`, function(err, files) {
  files.forEach(function(file, i) {
    let f = require(`${__dirname}/docs/${file}`);
    if (f.content && f.content[0] === '{') {
      let d = JSON.parse(f.content);
      switch (d.type) {
        case 'api':
          console.log(d.name);
          break;
        case 'component':
          console.log(`<${d.componentName}>`);
          break;
      }
    }
  });
});
