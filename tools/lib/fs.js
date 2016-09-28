import mkdirp from 'mkdirp';

export const makeDir = (path) => {
  new Promise((resolve, reject) => {
    mkdirp(path, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
