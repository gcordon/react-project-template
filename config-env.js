const fs = require('fs');
const program = require('commander');

program.option('-e, --env <type>', 'set build env', 'pre');
program.parse(process.argv);
const params = program.opts()

const $1 = params.env;

if (['development', 'pre', 'production', 'proxy'].includes($1)) {
    try {
       fs.writeFileSync('.env', `REACT_APP_BUILD_ENV = '${$1}'`, 'utf-8');
    } catch (error) {
       console.error(error);
       return;
    }
} else {
    console.error('参数不符合要求');
    return;
}