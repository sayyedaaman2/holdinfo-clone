import { ReactNode, useEffect } from "react";
import { useAppSelector } from "../app/hook";
import { ThemeConstant } from "../utils/constant";
interface ThemeContextWrapperProps {
  children: ReactNode;
}
const ThemeContextWrapper: React.FC<ThemeContextWrapperProps> = (props) => {
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    switch (theme) {
      case ThemeConstant.dark:
        document.body.classList.add("white-content");
        break;
      case ThemeConstant.light:
      default:
        document.body.classList.remove("white-content");
        break;
    }
  }, [theme]);

  return <>{props.children}</>;
};

export default ThemeContextWrapper;
