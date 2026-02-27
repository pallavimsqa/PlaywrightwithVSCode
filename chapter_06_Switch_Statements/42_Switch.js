// Switch
// 0 -Sunday, 1-Monday , 2-Tuesday , 3-Wednesday, 4-thursday. 5-Friday, 6 -Saturday 

let day=2;
switch(day){
    case 0: 
    console.log("Sunady - Rest Day");
    break;
    case 1: 
    console.log("Monday - Sprint Planning");
    break;
    case 2: 
    console.log("Tuesday - Devlopment day");
    break;
    case 3: 
    console.log("Wednesday - Code review Day");
    break;
    case 4: 
    console.log("Thursday - Testing Day");
    break;
    case 5: 
    console.log("Friday - Deployment & Retro Day");
    break;
    case 6: 
    console.log("Saturday - Rest Day");
    break;
    default:
        console.log("Invalid day value");
}