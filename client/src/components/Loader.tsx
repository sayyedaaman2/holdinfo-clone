import { Oval } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Oval
        ariaLabel="oval-loading"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={5}
        color="#3dc6c1"
        secondaryColor="#3dc6c1"
      />
    </div>
  );
};

export default Loader;
