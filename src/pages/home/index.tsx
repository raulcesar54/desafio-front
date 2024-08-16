import { ListDocs } from "../../components/molecules";
import { TEXTS } from "../../constants/texts";

export const Home = () => {
  return (
    <main className="flex-col gap-8 grid grid-cols-24">
      <div className="flex flex-col col-span-24 gap-0 w-full">
        <h1 className=" text-2xl font-bold">{TEXTS.TITLE}</h1>
        <small className="font-thin text-sm">{TEXTS.SUBTITLE}</small>
      </div>
      <div className="col-span-24">
        <ListDocs />
      </div>
    </main>
  );
};
