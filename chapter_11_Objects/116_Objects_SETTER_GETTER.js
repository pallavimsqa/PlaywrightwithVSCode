// 
const user = {
    firstName: "Pallavi ",
    lastName: "M S",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName);
user.fullName = "Dharani Pallavi";
console.log(user.fullName);

