import React from "react";
import { useServicesIndexPageController } from "pages/services";
import AddIcon from "baseComponents/icons/add";
import AdminLayout from "baseComponents/layout/admin";
import ServiceRow from "./serviceRow";
import Input from "components/Input";
import SearchIcon from "baseComponents/icons/search";

const ServicesIndex = () => {
  const { services } = useServicesIndexPageController();

  return (
    <AdminLayout>
      <h1 className="uppercase text-[#5B5B5B] font-bold text-[20px] mb-[10px]">
        Lista de serviços
      </h1>
      <div className="w-full border border-black min-h-full rounded-3xl p-5">
        <div className="flex justify-between">
          <div>
            <div className="relative group">
              <SearchIcon className="absolute top-2 left-4 text-[#5b5b5b]" />
              <Input inputClasses="pl-12 " placeholder="Pesquisar" />
            </div>
          </div>
          <div>
            <div className="relative flex items-center flex-col mt-10">
              <AddIcon className="text-[#013D80] absolute left-1/2 transform -translate-x-1/2 -top-11" />
              <div className="bg-[#013D80] rounded-3xl text-white text-[14px] py-[14px] px-[15px]">
                Adicionar serviço
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr) );" }}
        >
          <ServiceRow service={{ type: "Banho" }} />
          <ServiceRow service={{ type: "Consulta" }} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default ServicesIndex;
