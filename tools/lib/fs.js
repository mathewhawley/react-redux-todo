import mkdirp from 'mkdirp';

export const makeDir = (path) => {
  return new Promise((resolve, reject) => {
    mkdirp(path, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
