import { ComponentType, useEffect } from "react";
import { useLocation } from "react-router-dom";

type WithScrollToSectionProps<T> = {
  children: T;
};

const WithScrollToSection = <T extends object>(
  Component: ComponentType<WithScrollToSectionProps<T>>
) => {
  return function WrappedComponent(props: WithScrollToSectionProps<T>) {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const section = document.querySelector(location.hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

    return <Component {...props} />;
  };
};

export default WithScrollToSection;
