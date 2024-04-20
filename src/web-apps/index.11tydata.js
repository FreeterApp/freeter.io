const calcUrlsInItemsTree = require('../_utils/itemsTree').calcUrlsInItemsTree;

function generateColumns (contents) {
  var columns = [[], [], []]
  var columnHgts = [0, 0, 0]

  var minColumn = function () {
    if (columnHgts[2] < columnHgts[1]) {
      if (columnHgts[2] < columnHgts[0]) {
        return 2
      } else {
        return 0
      }
    } else if (columnHgts[1] < columnHgts[0]) {
      return 1
    } else {
      return 0
    }
  }
  var col
  for (var i = 0; i < contents.length; i++) {
    col = minColumn()
    columns[col].push(contents[i])
    columnHgts[col] += (contents[i].items.length + 1.5) // 1.5 = title + margin added per each group
  }

  return columns
}

const pathRoot = '/web-apps';

const apps = calcUrlsInItemsTree(require('./apps.json'), pathRoot);
const columns = generateColumns(apps);

module.exports = {
  eleventyComputed: {
    columns
  }
}
