import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "components/Input";

const schema = yup.object().shape({
  startBusinessHour: yup.string().required("Este é um campo obrigatório"),
  endBusinessHour: yup.string().required("Este é um campo obrigatório"),
  startBreak: yup.string().required("Este é um campo obrigatório"),
  endBreak: yup.string().required("Este é um campo obrigatório"),
});

function SecondStep({ onSubmitWithSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log({ secondStepData: data });
    onSubmitWithSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-6 border border-gray-500 rounded-2xl p-6"
    >
      <Input
        error={errors.startBusinessHour}
        {...register("startBusinessHour", { required: true })}
        label="Início do expediente*"
      />
      <Input
        error={errors.endBusinessHour}
        {...register("endBusinessHour", { required: true })}
        label="Fim do expediente*"
      />
      <Input
        error={errors.startBreak}
        {...register("startBreak", { required: true })}
        label="Início do intervalo*"
      />
      <Input
        error={errors.endBreak}
        {...register("endBreak", { required: true })}
        label="Fim do intervalo*"
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

export default SecondStep;
