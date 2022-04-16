const storageType = {
    local : localStorage,
    session : sessionStorage,
  }
  
  class Storage {
    constructor(name, age, setStorage) {
    this.name = name;
    this.age = age;
    this.setStorage = setStorage ?? storageType.local; 
  }
    set(){
    this.setStorage.setItem(this.name, this.age);
  }
  
    get() {
      const getvalue = this.setStorage.getItem(this.name);
      console.log(getvalue);
      }
  
    clear(){
      this.setStorage.setItem(this.name, '');
    }
  
    isEmpty(){
      const keyValue = this.setStorage.getItem(this.name)
      if(keyValue === 'undefined' || keyValue === ''){
        console.log(true);
      }
      else {
        console.log(false);
      }
    }
}
    
  
const userNew1 = new Storage("John", 99, storageType.local);
const userNew2 = new Storage("Karen",25, storageType.session);
const userNew3 = new Storage("Marry",45, storageType.session);
const userNew4 = new Storage("Andy");
const userNew5 = new Storage("Bob",35);
