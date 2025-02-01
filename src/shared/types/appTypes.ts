export interface IWishList {
    id: number;
    name: string;
    description: string;
    isReserved: boolean;
    price: string;
    comments: IComments[];
    references_img: string[];
    links: string[];
    warning?: boolean;
  }

  export interface IComments {
    name: string;
    comment: string;
  }