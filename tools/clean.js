import del from 'del';
import { makeDir } from './lib/fs';

async function clean () {
  await del(['build']);
  await makeDir('build');
}

export default clean;
