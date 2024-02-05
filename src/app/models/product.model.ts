// title: string = "";
// description : string = "";
// imageUrl: string= "../../assets/logo5.png";
// price: number= 0;
// likes: number=0;
// isLiked: boolean = false;
// constructor() {}

export class Product {
    constructor(
        public id : number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public likes: number,
        public isLiked: boolean,
        public options: Array<string>,
        public DateOfCreation: Date = new Date(),
        public favorite? : boolean,
    ){}
}

export class User {
    constructor(
        public id : number,
        public gender: string,
        public name: string,
        public firstname: string,
        public email: string,
        public phone:number,
        public DateOfBirth?: Date,
        public adresse? : string
    ){}
}

export class CartItem {
    product: Product;
    quantity: number;    
    constructor(product: Product, quantity: number = 1) {
        this.product = product;
        this.quantity = quantity;
    }
  }