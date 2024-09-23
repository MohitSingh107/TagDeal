import { Component } from '@angular/core';

interface Smartphone {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  isPromotional: boolean;
  imageUrl: string;
}

@Component({
  selector: 'app-promotional-smartphones',
  templateUrl: './promotional-smartphones.component.html',
  styleUrls: ['./promotional-smartphones.component.css']
})
export class PromotionalSmartphonesComponent {
  smartphones: Smartphone[] = [
    {
      id: 1,
      name: 'iPhone 16',
      price: 79900,
      discountedPrice: 79000,
      isPromotional: true,
      imageUrl: 'https://www.apple.com/v/iphone-16/a/images/overview/contrast/iphone_16__flbknhdndb22_large_2x.jpg'
    },
    {
      id: 2,
      name: 'iPhone 16 Pro',
      price: 169900,
      discountedPrice: 159000,
      isPromotional: true,
      imageUrl: 'https://www.apple.com/v/iphone-16/a/images/overview/contrast/iphone_16_pro__fzqmc24ecpui_large_2x.jpg'
    },
    {
      id: 3,
      name: 'iPhone 15',
      price: 69900,
      discountedPrice: 63999,
      isPromotional: true,
      imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=100&crop=false'
    },
    {
      id: 4,
      name: 'iPhone 14 Plus',
      price: 69900.00,
      discountedPrice: 55999.00,
      isPromotional: true,
      imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=100&crop=false'
    },

    {
      id: 5,
      name: 'iphone 14',
      price: 89900.00,
      discountedPrice: 57999,
      isPromotional: true,
      imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=100&crop=false'
    },
  ];
}