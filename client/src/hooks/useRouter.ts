import { useLocation, useNavigate } from "react-router";

export const useRouter = () => {
  const push = useNavigate();
  const back = () => push(-1);
  const location = useLocation();
  return { push, back, pathname: location.pathname };
};
