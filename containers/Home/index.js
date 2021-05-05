import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const items = [
  {
    text: "SERVIÇOS",
    href: "/services",
    img: "/assets/icons/pet.svg",
  },
  {
    text: "PRODUTOS",
    href: "/products",
    img: "/assets/icons/dog-treat.svg",
  },
  {
    text: "PROMOÇÕES",
    href: "/promotions",
    img: "/assets/icons/coupon.svg",
  },
  {
    text: "PEDIDOS",
    href: "/orders",
    img: "/assets/icons/scooter.svg",
  },
];

function HomeContainer() {
  const router = useRouter();

  const onItemClick = (href) => {
    router.push(href);
  };

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col justify-center items-center h-[200px] w-full bg-blue-700 text-white">
        <h1 className="text-5xl">Bem vindo, Usuário!</h1>
      </div>
      <div className="flex flex-col text-gray-700 w-full items-center justify-center max-w-[800px] py-10">
        <h1 className="text-4xl font-medium">O que vamos mudar hoje?</h1>
        <ul className="flex mt-10">
          {items.map((item) => (
            <li
              onClick={onItemClick}
              as={Link}
              href={item.href}
              key={item.text}
              className="h-full cursor-pointer mt-auto w-[200px] shadow-xl border border-gray-100 p-8 rounded-3xl flex mr-12 last:mr-0 flex-col items-center justify-end"
            >
              <img src={item.img} className="mb-4" />
              <p className="text-gray-600 text-2xl">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomeContainer;
