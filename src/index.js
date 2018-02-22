class Sorter {
  constructor() {
      this.arr = [];
      this.type_sort =0;
  }

  add(element) {
      this.element = element;
      this.arr.splice(this.arr.length, 0, this.element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
      return this.arr.length;
  }
  toArray() {
      return this.arr;
  }
  sort(indices) {
      this.indices = indices;
      this.indices.sort(function(a, b) {
            return a - b;
        });
    var mas= [];
      for(var i=0; i<this.indices.length; i++){
          mas.splice(mas.length, 0, this.arr[this.indices[i]]);
      }
      
      switch(this.type_sort){
        case 1: { mas.sort(function(a, b) {
                return a.age - b.age;
            });
      
                }
      case 2: {
          mas.sort(function(a, b) {
                return b - a;
            });}
                        
      default: {
            mas.sort(function(a, b) {
            return a - b;
        }); 
    }
  }
        
      for(var i=0; i<this.indices.length; i++){
          this.arr[this.indices[i]]=mas[i];
      }
      return this.arr;
  }
  
  setComparator(compareFunction) {
      switch(compareFunction){
          case 'AGE_COMPARATOR': this.type_sort =1; break;
          case 'REVERSE_COMPARATOR': this.type_sort =2; break;
          case 'STRINGIFY_COMPARATOR': this.type_sort =3; break;
      }
      return ;
  }
}

module.exports = Sorter;