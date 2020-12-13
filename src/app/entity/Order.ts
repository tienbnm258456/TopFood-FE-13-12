import { OrderDetailRequest } from './OrderDetailRequest';

export class Order {
    userId: number;
    price: number = 0;
    description: string;
    cancelUrl: string;
    successUrl: string;
    orderDetailRequests: OrderDetailRequest[] = [];
    name: string;
    address: string;
    phone: string;
}