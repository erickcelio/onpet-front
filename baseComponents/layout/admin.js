import React from "react";
import PetIcon from "baseComponents/icons/pet";
import DogTreatIcon from "baseComponents/icons/dogTreat";
import CouponIcon from "baseComponents/icons/coupon";
import { minWidth } from "tailwindcss/defaultTheme";

const MenuItem = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center text-gray-500 my-[40px]">
      {icon}
      <div className="uppercase text-gray-500 mt-[10px]">{text}</div>
    </div>
  );
};

function AdminLayout({ children }) {
  return (
    <>
      <div className="bg-blue-700 h-[80px]"></div>
      <div className="flex">
        <div style={{minWidth: 260}}>
          <MenuItem text="Serviços" icon={<PetIcon />} />
          <MenuItem text="Produtos" icon={<DogTreatIcon />} />
          <MenuItem text="Promoções" icon={<CouponIcon />} />
        </div>
        <div className="w-full pr-[75px] pt-[30px] flex-1">
          {children}
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
