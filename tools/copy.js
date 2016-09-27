import ncp from 'ncp';

async function copy () {
  await ncp('src/html', 'build');
}

export default copy;
