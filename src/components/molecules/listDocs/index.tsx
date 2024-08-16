import { useEffect, useState } from "react";
import { TEXTS } from "../../../constants/texts";
import { useAppDispatch } from "../../../hooks/useRedux";
import { change } from "../../../redux/slices/managementForm.slice";
import { Card } from "../../atom";
import { motion, AnimatePresence } from "framer-motion";
import { api } from "../../../service/api";
import useSWR from "swr";
import { API_KEY_SWR } from "../../../types/routes";

export const ListDocs = () => {
  const dispatch = useAppDispatch();
  const { data } = useSWR(
    API_KEY_SWR.LIST,
    api.list.siturations<{ name: string; description: string; id: string }[]>
  );

  return (
    <motion.section
      transition={{
        duration: 2,
        delay: 1,
      }}
      className="flex flex-row gap-3 flex-wrap w-full "
    >
      <button
        onClick={() => dispatch(change())}
        className=" bg-primary max-w-64 max-h-56 w-64 h-56 min-w-64 min-h-56 p-8 text-white rounded-md hover:bg-primary-ligth duration-200 transition"
      >
        {TEXTS.BUTTON_LABEL}
      </button>
      <AnimatePresence>
        {data?.map((props, index) => (
          <motion.section
            key={props.id}
            initial={{ opacity: 0, y: 240 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 140 }}
            transition={{
              duration: 0.4,
              delay: index / 8,
            }}
            className="flex flex-row gap-4"
          >
            <Card
              key={props.id}
              title={props.name}
              id={props.id}
              description={props.description}
            />
          </motion.section>
        ))}
      </AnimatePresence>
    </motion.section>
  );
};
