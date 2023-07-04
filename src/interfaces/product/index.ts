import { CartProductInterface } from 'interfaces/cart-product';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  cart_product?: CartProductInterface[];
  company?: CompanyInterface;
  _count?: {
    cart_product?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  company_id?: string;
}
