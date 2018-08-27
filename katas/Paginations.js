// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    this.collection = collection;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  fullPageCount() {
    return Math.floor(this.itemCount() / this.itemsPerPage);
  }

  pageItemCount(num) {
    if (num < this.pageCount()) {
      return this.itemsPerPage;
    }
    else if (num = this.pageCount()) {
      return this.itemCount() % this.itemsPerPage
    }
    return -1;
  }

  pageIndex(item) {
    if (item <= this.itemsPerPage) {
      return 1
    }
    else if (item == this.itemCount()) {
      return this.pageCount()
    }
    else if (item < this.itemCount()) {
      let answer;
      for (answer = 1; answer <= this.pageCount(); answer++) {
        if (item <= (this.itemsPerPage * answer)) {
          return answer;
        }
      }
    }
    return -1;
  }

}


let array = [];
array.length = 47865478;
console.log(array.length);

const helpers = new PaginationHelper(array, 1736)
console.log('количество  роллов', helpers.itemCount());
console.log('количество контейнеров', helpers.pageCount());
console.log('контейнеров заполненных полностью', helpers.fullPageCount());
console.log('в контейнере столько то роллов', helpers.pageItemCount(27573));
console.log('ролл лежат в этом контейнере', helpers.pageIndex(784678));





// // returns the number of items within the entire collection
// PaginationHelper.prototype.itemCount = function() {

// }

// // returns the number of pages
// PaginationHelper.prototype.pageCount = function() {

// }

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
// PaginationHelper.prototype.pageItemCount = function(pageIndex) {

// }

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function(itemIndex) {

// };