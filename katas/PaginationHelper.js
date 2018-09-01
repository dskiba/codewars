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

  pageItemCount(pageIndex) {
    return pageIndex < this.pageCount()
      ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
      : -1;
  }

  pageIndex(itemIndex) {
    return itemIndex < this.collection.length && itemIndex >= 0
      ? Math.floor(itemIndex / this.itemsPerPage)
      : -1;
  }
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log('pageCount', helper.pageCount()); //should == 2
console.log('itemCount', helper.itemCount()); //should == 6
console.log('/should == 4///', helper.pageItemCount(0)); //should == 4
console.log('// last page - should == 2///', helper.pageItemCount(1)); // last page - should == 2
console.log('-1 ', helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log('== 1 pageIndex ', helper.pageIndex(5)); //should == 1 (zero based index)
console.log('== 0 pageIndex ', helper.pageIndex(2)); //should == 0
console.log('== -1 pageIndex ', helper.pageIndex(20)); //should == -1
console.log('== -1 pageIndex ', helper.pageIndex(-10)); //should == -1



