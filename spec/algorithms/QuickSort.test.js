describe("QuickSort", () => {
    //Arrange
    let QuickSort = require('../../algorithms/QuickSort');
    let data = [2,6,3,4,5,1]
    
    beforeEach(() => {
        data = [2,6,3,4,5,1];
    });
  
    it("should not be []", () => {
        //Act
        let newData = QuickSort(data);
        //Assert
        expect(newData).not.toEqual([]);
    });

    it("should be sorted", () => {
        let newData = QuickSort(data);
        expect(newData).toEqual([1,2,3,4,5,6]);
    });
  
});
  