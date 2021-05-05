import React from "react";
import { useForm } from "react-hook-form";

function ThirdStep({ onSubmitWithSuccess }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log({ thirdStepData: data });
    onSubmitWithSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-6 border border-gray-500 rounded-2xl p-6"
    >
      <div className="col-span-2 flex items-center">
        <span className="mr-4">Possui sistema de busca/entrega?*</span>
        <input
          className="mr-2"
          type="radio"
          id="hasDeliveryServiceTrue"
          value="true"
          checked
          {...register("hasDeliveryService")}
        />
        <label htmlFor="hasDeliveryServiceTrue">Sim</label>
        <input
          className="ml-4 mr-2"
          id="hasDeliveryServiceFalse"
          type="radio"
          value="false"
          {...register("hasDeliveryService")}
        />
        <label htmlFor="hasDeliveryServiceFalse">Não</label>
      </div>

      <div className="flex flex-col">
        <label>Descrição</label>
        <textarea
          {...register("description")}
          placeholder="Conte-nos um pouco mais sobre seu pet shop (essa descrição é
          disponibilizada para usuários do aplicativo)."
          className="rounded-xl mt-2 min-h-[180px]"
          name="description"
        />
      </div>

      <button
        type="submit"
        className="col-span-2 p-3 text-white bg-blue-800 font-medium text-lg w-full rounded-2xl"
      >
        Prosseguir
      </button>
    </form>
  );
}

export default ThirdStep;
