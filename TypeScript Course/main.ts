
(function () {
    // let c = 20;
    // if (c < 30) {
    //     console.log("less")
    // }


    // //datatypes
    // let friends: string[] = ["raaf", "ahmad"];
    // let imgSrc: null = null;
    // let arr: any[] = [2, 'ahmaf'];
    // //tuple datatype 
    // let emplyee: [string, number, boolean] = ["ahmad", 33, false];
    // let id: string | number | null = 34;
    // id = "Fff";
    // id = null;

    // let list: (string | number)[] = [333, "ff"];
    // type role = 'admin ' | 'user' | 'editor';
    // let userRole: role = 'editor';

    // function sayHello(username: string, msg: string): void {
    //     console.log("Hello" + username + " :  " + msg)
    // }

    // let x: any;
    // x = "fadi"
    // console.log(typeof x)

    // let y: unknown;
    // y = 34;
    // if (typeof y == "number") {
    //     y--;
    // }
    // console.log(typeof y);

    // enum color {
    //     RED = 5,
    //     GREEN = 7,
    //     BLUE = 9
    // }

    // let carColor: color = color.RED;
    // console.log(carColor);



    // interface User {
    //     namee: string,
    //     age: number,
    //     id: string,
    //     degree?: number,
    //     sayHello?: (name: string) => {}
    // }
    // let userObj: User = {
    //     namee: "jjjj",
    //     age: 23,
    //     id: "233"

    // }

    // let allUsers: User[] = [
    //     { namee: "jjjj", age: 23, id: "233" },
    //     { namee: "kkkk", age: 24, id: "444" },
    //     { namee: "dddd", age: 26, id: "263" }
    // ]

    // class Employee implements User {
    //     namee: string = "Dalis";
    //     degree?: number | undefined;
    //     sayHello?: ((name: string) => {}) | undefined;
    //     age: number = 0;
    //     id: string = '';
    //     private company: string = "UJ";
    //     get CompanyName() {
    //         return this.company
    //     }
    //     set CompanyName(companyName) {
    //         this.company = companyName
    //     }
    // }
    // let ahmad = new Employee();
    // console.log(ahmad.CompanyName);
    // ahmad.CompanyName = "DLSS"
    // console.log(ahmad.CompanyName);

    // const Eng: Record<string, string | number> = {
    //     "ahmad ": "dddd",
    //     "age ": 23
    // }

    interface Person {
        name: string,
        age: number,
        getUser(role: string): string;

    }
    class User implements Person {
        name: string = "Laila";
        age: number = 27;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        getUser() {
            return this.name;
        }

    }

    class Admin extends User {
        constructor(name: string, age: number, public permissions: string) {
            super(name, age);
            this.permissions = permissions;
        }
    }

})();