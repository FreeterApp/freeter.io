const { mkdir } = require('node:fs/promises');
const path = require('path');
const sharp = require('sharp');
const calcUrlsInItemsTree = require('../_utils/itemsTree').calcUrlsInItemsTree;

const pathRoot = '/workflow-examples';

const toc =
  calcUrlsInItemsTree(require('./toc.json'), pathRoot)
    .map(item => ({
      ...item,
      imgPreviewUrl: item.url + item.item + '-preview.jpg'
    }));
toc.forEach(async item => {
  const input = path.join('src', item.url + item.item + '.png');
  const output = path.join('build', item.imgPreviewUrl);

  await mkdir(path.dirname(output), {recursive: true});
  sharp(input)
    .resize({ width: 450 })
    .toFile(output, err => {
      if(err) {
        throw new Error(err);
      }
    })
});

module.exports = {
  toc
}
