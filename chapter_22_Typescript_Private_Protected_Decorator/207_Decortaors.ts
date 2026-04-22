// Decorators are the functions attached to the class, method and properties
// used for log with @ sysmbol

function Role(role:string){
    return function (constructor: Function){
    constructor.prototype.role = role; // same as constructor.this.role
    };
}

@Role("admin")
class Admin{

}
const admin = new Admin();
console.log((admin as any).role);