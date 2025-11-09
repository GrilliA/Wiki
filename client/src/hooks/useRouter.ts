import { useNavigate } from "react-router";

export const useRouter = () => {
  const push = useNavigate();
  const back = () => push(-1);
  return { push, back };
};
