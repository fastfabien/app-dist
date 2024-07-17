import { Container, Headset, ShoppingBag, Star } from "lucide-react";

export const Info = () => {
  return (
    <div className="flex flex-row bg-gray px-2 py-2 mx-32 mt-22">
      <div className="flex flex-row justify-between items-center w-1/4 gap-4">
        <Star width={50} height={50} />
        <p className="text-sm">24 ans d&apos;expertise à votre service</p>
      </div>
      <div className="flex flex-row justify-between items-center w-1/4 gap-4">
        <ShoppingBag width={50} height={50} />
        <p className="text-sm">
          {" "}
          + de 15 000 références choisies par nos experts
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-1/4 gap-4">
        <Container width={50} height={50} />
        <p className="text-sm">
          Livraison en magasin offerte dès 200 euros d&apos;achat
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-1/4 gap-4">
        <Headset width={50} height={50} />

        <p className="text-sm">Une équipe clientèle à votre écoute</p>
      </div>
    </div>
  );
};
