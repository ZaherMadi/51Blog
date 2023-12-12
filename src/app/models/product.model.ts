// title: string = "";
// description : string = "";
// imageUrl: string= "../../assets/logo5.png";
// price: number= 0;
// likes: number=0;
// isLiked: boolean = false;
// constructor() {}

export class Product {
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public likes: number,
        public isLiked: boolean,
        public size?: Array<string>
    ){}
}