import Image from "next/image";
import { Button } from "@/components/ui/button";

type CardProductIdProps = {
  product_id: number;
  product_name: string;
  product_img: string;
  product_buy_price: string;
};

interface DetailProductProps {
  product: CardProductIdProps;
}

// const DetailProduct: React.FC<CardProductIdProps> = () => {
const DetailProduct = ({ product }: DetailProductProps) => {
  return (
    <section className="container py-36">
      <div className="flex gap-10">
        <Image
          src={`https://sistemtoko.com/img/user/demo/product/${product.product_img}`}
          width={450}
          height={450}
          alt="product"
        />
        <div>
          <div className="py-6 space-y-2">
            <h1 className="text-2xl">{product.product_name}</h1>
            <h1 className="text-4xl">Rp. {product.product_buy_price}</h1>
            <h1>Stock : 20</h1>
          </div>
          <div className="w-full h-[2px] mb-6 bg-[#EBDECD]"></div>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            reprehenderit incidunt voluptas molestias nemo dicta laudantium
            dolorum nobis alias quo. Saepe deleniti voluptates nam similique
            dolor tempore velit reiciendis rerum? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Debitis nesciunt nostrum et
            consequatur delectus iste qui. Aliquid eligendi iure dolorem qui,
            natus molestias unde tempora ducimus, aliquam deserunt magni iusto!
          </p>
          <div className="flex justify-between pt-6 items-center">
            <div className="flex gap-6">
              <Button>S</Button>
              <Button>M</Button>
              <Button>XL</Button>
            </div>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
