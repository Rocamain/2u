import * as Components from '../components/sections/index';
import useFetch from '../hooks/useFetch';

export default function PageComponent(props) {
  const { path } = props;

  const data = useFetch(`http://localhost:8000/${path}`);

  const renderComponents = (routeComponents) => {
    const all = routeComponents.map((routeInfo, index) => {
      let Component = Components[routeInfo.component];
      const { component, ...info } = routeInfo;

      return (
        Component && (
          <Component
            key={index}
            {...info}
            path={path + '?component=' + routeInfo.component}
          />
        )
      );
    });

    return all;
  };

  return data && <main> {renderComponents(data)}</main>;
}
