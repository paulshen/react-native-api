import fs from 'fs';

fs.readdir(`${__dirname}/docs`, function(err, files) {
  let data = {};
  files.forEach(function(file, i) {
    let f = require(`${__dirname}/docs/${file}`);
    if (f.content && f.content[0] === '{') {
      let d = JSON.parse(f.content);
      switch (d.type) {
        case 'api':
        case 'component':
          console.log(d.componentName);
          d.hasExamples = d.examples && d.examples.length > 0;
          delete d.examples;
          data[d.componentName.toLowerCase()] = d;
          if (d.classes && d.classes.length > 0) {
            d.classes.forEach(klass => {
              data[klass.name.toLowerCase()] = Object.assign(
                {},
                d,
                { docblock: null, classes: [] },
                klass,
                {
                  componentName: klass.name,
                }
              );
            });
            delete d.classes;
          }
          if (d.methods && d.methods.length > 0) {
            d.methods.forEach(function(method) {
              delete method.source;
            });
          }
          delete d.styles;
          break;
      }
    }
  });
  fs.writeFile(
    `${__dirname}/site/src/Data.js`,
    `module.exports=${JSON.stringify(data)};`,
    function(err) {
      if (!err) {
        console.log('done');
      }
    }
  );
});
