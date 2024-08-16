import { useState } from "react";
import { CardProps } from "./types";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { api } from "../../../service/api";
import { useSWRConfig } from "swr";
import { API_KEY_SWR } from "../../../types/routes";
import { toast } from "sonner";

export const Card = (props: CardProps) => {
  const { title, description, id } = props;
  const [showIcon, setShowIcon] = useState(false);
  const { mutate } = useSWRConfig();
  const variants = {
    hidden: { y: 40, opacity: 0, scale: 0.1 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };
  const handleDeleteItem = async () => {
    await api.delete.siturations(id);
    const confirm = window.confirm("Tem certeza que deseja remover este item?");
    if (confirm) {
      mutate(API_KEY_SWR.LIST);
      toast.success("Situação removida com sucesso!");
      return;
    }
  };
  return (
    <div
      className="ring-1 p-4 bg-white flex flex-col max-w-64 max-h-56 w-64 h-56 min-w-64 min-h-56 rounded-lg  ring-slate-200 items-center justify-between  hover:ring-primary transition"
      onMouseOver={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
    >
      <div className="flex w-full  justify-end">
        <motion.div
          initial="hidden"
          animate={showIcon ? "visible" : "hidden"}
          exit="hidden"
          variants={variants}
          onClick={handleDeleteItem}
          className="hover:bg-primary/10 p-1 rounded-full hover:ring-primary hover:ring-1 hover:transition"
        >
          <X size={16} className="cursor-pointer" />
        </motion.div>
      </div>
      <div className="flex flex-col w-full justify-center items-center ">
        <h1 className="font-bold uppercase text-base">{title}</h1>
        <small className="font-normal text-primary">nome</small>
      </div>
      <strong className=" text-primary h-full flex items-center">
        {description}
      </strong>
    </div>
  );
};
