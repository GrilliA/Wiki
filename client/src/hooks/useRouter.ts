import { useLocation, useNavigate } from "react-router";

export const useRouter = () => {
  const push = useNavigate();
  const back = () => push(-1);
  const location = useLocation();
  const handlePush = (pathname: string) => {
    const url = `/dashboard/${pathname}`;
    push(url);
  };
  return { push: handlePush, back, pathname: location.pathname };
};
