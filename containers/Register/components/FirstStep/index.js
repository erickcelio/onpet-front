import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "components/Input";

const schema = yup.object().shape({
  cnpj: yup.string().required("Este é um campo obrigatório"),
  fantasyName: yup.string().required("Este é um campo obrigatório"),
  cep: yup.string().required("Este é um campo obrigatório"),
  address: yup.string().required("Este é um campo obrigatório"),
  complement: yup.string(),
  neighborhood: yup.string().required("Este é um campo obrigatório"),
  city: yup.string().required("Este é um campo obrigatório"),
  state: yup.string().required("Este é um campo obrigatório"),
});

function FirstStep({ onSubmitWithSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log({ firstStepData: data });
    onSubmitWithSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-6 border border-gray-500 rounded-2xl p-6"
    >
      <Input
        error={errors.cnpj}
        {...register("cnpj", { required: true })}
        label="CNPJ*"
      />
      <Input
        error={errors.fantasyName}
        {...register("fantasyName", { required: true })}
        label="Nome fantasia*"
      />
      <Input
        error={errors.cep}
        {...register("cep", { required: true })}
        label="CEP*"
      />
      <Input
        error={errors.address}
        {...register("address", { required: true })}
        label="Endereço*"
      />
      <Input
        error={errors.complement}
        {...register("complement")}
        label="Complemento"
      />
      <Input
        error={errors.neighborhood}
        {...register("neighborhood", { required: true })}
        label="Bairro*"
      />
      <Input
        error={errors.city}
        {...register("city", { required: true })}
        label="Cidade*"
      />
      <Input
        error={errors.state}
        {...register("state", { required: true })}
        label="Estado*"
      />

      <button
        type="submit"
        className="col-span-2 p-3 text-white bg-blue-800 font-medium text-lg w-full rounded-2xl"
      >
        Prosseguir
      </button>
    </form>
  );
}

export default FirstStep;
