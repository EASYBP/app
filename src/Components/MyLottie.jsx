import { useLottie } from 'lottie-react';

const MyLottie = ({animation}) => {
 
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptions);

  return View;
  
}

export default MyLottie

