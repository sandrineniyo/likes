class vote{
    constractor(name,age){
        this.name=name
        this.age=age
        }
        Age_valid(){
            if(age>18){
                console.log("👍👍You are allowed to Vote!!");
            }
            else{
                console.log("👎👎You are allowed to Vote!!");
            }
    }
//     class person extends vote{
//         Age_valid(); 
//   }
  Age_valid();
 }
    const person1=new vote("Kamana",19);
    const person2=new vote("Bibi",90);
    const  array_person=new vote("Niygena",20);
    console.log(person1);
    console.log(person2);
    console.log(person2.name);
  