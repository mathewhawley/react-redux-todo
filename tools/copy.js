import ncp from 'ncp';

async function copy () {
  await ncp('src/html', 'build');
  await ncp('src/assets', 'build/static');
}

export default copy;
