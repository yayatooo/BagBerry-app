export interface CardProductProps {
    id: number
    name: string;
    photo: string;
    currency: string
    price: string;
  }


  export interface productProps {
    
      name: string;
      id?: number;
      parent: number;
      photo: string;
      photo_type: string;
      total: number;
      display: string;
      totalPrice: number;
      stock_changes: number;
      stock: number;
      varian: [
          {
          value: string
          }
      ];
      plain_varian: [
          {
          id: number;
          value: string
          }
      ];
      childs: [
            {
            name: string
            id: number;
            category_id: null;
            category_name: null;
            submit: string;
            parent: number;
            photo: string
            photo_type: string;
            buyPrice: number;
            total: number;
            display: string;
            totalPrice: number;
            stock_changes: number;
            stock: number;
                varian: [
                  {
                  value: string
                  }
                ];
            plain_varian: [
              {
              id: number
              value: string
              }
            ];
            childs: [];
            type: string
            local: number;
            status: string;
            description: string
            last_sync: string
            currency: string
            plain_price: number;
            price_before_discount: number;
            price: number;
            publish: true;
            code: string;
            plain_code: string;
            updated_at: {
            date: string
            timezone_type: 3;
            timezone: string
            };
            plain_code_next: number;
            photos: [];
            weight: number;
            unlimited: number;
            publish_web: number;
            flash_price: number;
            flash_date: string
            keywords: []
            }
      ];
      type: string;
      local: number;
      status: string
      description: string;
      currency: string;
      plain_price: number
      price_before_discount:number
      price: string
      publish: true;
      code: number
      plain_code: number
      updated_at: {
      date: string
      timezone_type: number;
      timezone: string
      };
      photos: [
      string
      ];
      weight: number;
      unlimited: number;
      publish_web: number;
      keywords: []
      
  }