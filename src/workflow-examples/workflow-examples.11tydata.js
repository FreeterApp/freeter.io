const itemsTreeToBreadcrumbs = require('../_utils/breadcrumbs').itemsTreeToBreadcrumbs;
const calcUrlsInItemsTree = require('../_utils/itemsTree').calcUrlsInItemsTree;
const getItemByUrl = require('../_utils/itemsTree').getItemByUrl;

const pathRoot = '/workflow-examples';

const toc = calcUrlsInItemsTree(require('./toc.json'), pathRoot);

const prepCurItem = curItem => (curItem ? {
  ...curItem,
  imgScreenUrl: curItem.url + curItem.item + '.png'
}: curItem)

module.exports = {
  layout: 'v2_workflow-examples-page.njk',
  date: new Date('2024-01-01'),
  modifDate: new Date('2025-06-24'),
  eleventyComputed: {
    toc: data => data.toc ? data.toc : toc,
    breadcrumbs: data => itemsTreeToBreadcrumbs(toc, data.page.url),
    curItem: data => prepCurItem(getItemByUrl(toc, data.page.url)),
    pageImage: data => {
      return data.curItem ? `${data.curItem.imgScreenUrl}` : data.pageImage;
    },
    pageTitle: data => {
      return data.curItem?.title || data.pageTitle;
    },
    pageDescription: data => {
      return data.curItem?.metaDescr || data.pageDescription;
    }
  }
}
