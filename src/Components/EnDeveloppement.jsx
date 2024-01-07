import MyLottie from "./MyLottie";
import animationData from "../public/animations/developing.json";
const EnDeveloppement = () => {
  return (
    <div className="w-screen h-[80vh] flex flex-col justify-center items-center">
      <MyLottie animation={animationData} />
      <h2 className="text-xl">En développement...</h2>
    </div>
  );
};

export default EnDeveloppement;
