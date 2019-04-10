describe("BubbleSort", () => {
    let BubbleSort = require('../../algorithms/BubbleSort');
    let data = [1,2,3,4,1,2,32,4]
    
    beforeEach(() => {
        data = [1,2,3,4,1,2,32,4];
    });
  
    it("should not be []", () => {
      let newData = BubbleSort(data);
      expect(newData).not.toEqual([]);
    });

    it("should be sorted", () => {
      let newData = BubbleSort(data);
      expect(newData).toEqual([1,1,2,2,3,4,4,32]);
    });
  
});
  