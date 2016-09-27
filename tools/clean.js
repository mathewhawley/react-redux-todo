import del from 'del';
import mkdirp from 'mkdirp';

async function clean () {
  await del(['build']);
  await new Promise((resolve, reject) => {
    mkdirp('build', (err) => {
      err ? reject(err) : resolve();
    });
  });
}

export default clean;
