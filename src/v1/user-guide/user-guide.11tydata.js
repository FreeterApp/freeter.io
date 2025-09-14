const itemsTreeToBreadcrumbs = require('../../_utils/breadcrumbs').itemsTreeToBreadcrumbs;
const calcUrlsInItemsTree = require('../../_utils/itemsTree').calcUrlsInItemsTree;
const getItemByUrl = require('../../_utils/itemsTree').getItemByUrl;

const pathRoot = '/v1/user-guide';

const toc = calcUrlsInItemsTree(require('./toc.json'), pathRoot);

module.exports = {
  layout: 'v1_guide-page.njk',
  toc,
  date: new Date('2024-01-01'),
  modifDate: new Date('2024-01-01'),
  eleventyComputed: {
    curItem: data => getItemByUrl(toc, data.page.url),
    breadcrumbs: data => itemsTreeToBreadcrumbs(toc, data.page.url),
    pageTitle: data => {
      return data.curItem?.title || data.pageTitle;
    },
    pageDescription: data => {
      return data.curItem?.metaDescr || data.pageDescription;
    }
  }
}
