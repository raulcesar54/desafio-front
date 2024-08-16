import { Outlet as OutletComponent } from "react-router-dom";
import { Form, Header } from "../../molecules";

export const Wrapper = () => {
  return (
    <main className="flex flex-row overflow-x-hidden px-10 md:px-0">
      <div className="container mx-auto flex flex-col  h-screen flex-1">
        <Header />
        <div className="flex-1 p-0 md:p-2 pl-0 md:pl-0 w-full bg-bg-default">
          <div className="flex-1">
            <OutletComponent />
          </div>
        </div>
      </div>
      <Form />
    </main>
  );
};
