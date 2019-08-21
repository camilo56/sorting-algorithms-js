let RadixSort = require('../../algorithms/RadixSort');

describe("RadixSort", () => {
    let data = [2,1,3,5,8,6,4,7]
    
    beforeEach(() => {
        data = [2,1,3,5,8,6,4,7];
    });
  
    it("should not be []", () => {
      let newData = RadixSort(data);
      expect(newData).not.toEqual([]);
    });

    it("should be sorted", () => {
      let newData = RadixSort(data);
      expect(newData).toEqual([1,2,3,4,5,6,7,8]);
    });
  
});
  