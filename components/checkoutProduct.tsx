const CheckoutProduct = ({
  title,
  price,
  place,
}: {
  title: string;
  price: number;
  place: string;
}) => {
  return (
    <div className="flex justify-between p-2 border border-yellow-400">
      <div className="text-left">
        <h4 className="text-xl font-bold">{title}</h4>
        <h6>location :{place}</h6>
      </div>
      <div>
        <h4 className="text-xl font-bold">${price}</h4>
      </div>
    </div>
  );
};
export default CheckoutProduct;
