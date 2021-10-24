export interface Sepet {
    total: number;
    data : SepetData[]
}
export interface SepetData {
    id:number,
    name:string;
    quantity: number,
    price: number,
    totalPrice: number,
}