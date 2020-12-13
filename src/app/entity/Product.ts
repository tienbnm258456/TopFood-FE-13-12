import { Data } from '@angular/router';
import { Category } from './Category';
import { Supplier } from './Supplier';

export class Product {
    id: number;
    productName: String;
    price: number;
    description: String;
    priceSale: number;
    status: number;
    image: String;
    createDate: Date;
    updateAt: Date;
    categoryName: String;
    categoryId: number;
    file: File;
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string;
    nameImage: any;
    priByte: any;
    supplierName: String;
    supplierId: number;
    imageBase64: string;
    category: Category;
    supplier: Supplier;
}