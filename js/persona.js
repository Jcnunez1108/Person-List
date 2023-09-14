class PersonP {
  static personId = 0;
  constructor(name, lastName) {
    
    this._name = name;
    this._lastName = lastName;
    this._id = ++PersonP.personId;
  }
  
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
  get id(){
    return this._id;
  }
}
