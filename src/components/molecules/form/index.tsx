import { motion } from "framer-motion";
import { useAppSelector } from "../../../hooks/useRedux";
import { ChevronLeft } from "lucide-react";
import { TEXTS } from "../../../constants/texts";
import { useDispatch } from "react-redux";
import { change } from "../../../redux/slices/managementForm.slice";
import { FormProvider, useForm } from "react-hook-form";
import { Button, TextField } from "../../atom";
import { createSchema, FormProps } from "./form.schema";
import { toast } from "sonner";
import { api } from "../../../service/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSWRConfig } from "swr";
import { API_KEY_SWR } from "../../../types/routes";

const MAX_INPUT_NAME = 20;
const MAX_INPUT_DESCRIPTION = 240;

export const Form = () => {
  const { mutate } = useSWRConfig();
  const selector = useAppSelector((props) => props.active);
  const dispatch = useDispatch();
  const methods = useForm<FormProps>({
    resolver: zodResolver(createSchema),
  });
  const handleSaveForm = async (data: FormProps) => {
    toast.promise(async () => await api.insert.siturations<FormProps>(data), {
      loading: "Carregando...",
      success: () => {
        dispatch(change());
        methods.reset();
        mutate(API_KEY_SWR.LIST);
        return TEXTS.SUCCESS_SAVE;
      },
      error: TEXTS.ERROR_SAVE,
    });
  };
  return (
    <motion.div
      initial={{ width: 0, right: 0 }}
      animate={selector.active ? { width: 400 } : { width: 0, right: -410 }}
      exit={{ width: 0 }}
      className="absolute h-screen w-[400px] right-0 border border-l-2 p-6 border-slate-100 bg-white"
    >
      <button
        onClick={() => {
          dispatch(change());
          methods.reset();
        }}
        className="flex flex-row gap-2 items-center "
      >
        <ChevronLeft />
        <h1 className="font-bold text-md">{TEXTS.TITLE_FORM}</h1>
      </button>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSaveForm)}
          className="flex flex-col gap-4 mt-10"
        >
          <div className="col-span-12 md:col-span-6">
            <TextField
              name="name"
              placeholder="Nome"
              label="Nome*"
              maxLength={MAX_INPUT_NAME}
            />
            <small className="text-muted w-full flex justify-end opacity-40">
              {methods.watch("name")?.length}/{MAX_INPUT_NAME}
            </small>
          </div>
          <div className="col-span-12 md:col-span-6">
            <TextField
              name="description"
              placeholder="Descrição"
              label="Descrição*"
              maxLength={MAX_INPUT_DESCRIPTION}
              rows={40}
              type="textarea"
            />
            <small className="text-muted w-full flex justify-end opacity-40">
              {methods.watch("description")?.length}/{MAX_INPUT_DESCRIPTION}
            </small>
          </div>
          <button type="submit" className={Button({ p: "xs" })}>
            Confirmar
          </button>
        </form>
      </FormProvider>
    </motion.div>
  );
};
