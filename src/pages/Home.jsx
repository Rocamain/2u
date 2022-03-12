import * as Components from '../components/homeSections/index';
import useDb from '../hooks/custom/getData';

export default function Home(props) {
  const { path } = props;

  const data = useDb(`http://localhost:8000/${path}`);

  const renderComponents = (componentsObj) => {
    const componentsNames = Object.keys(componentsObj);

    const all = componentsNames.map((componentName, index) => {
      let Component = Components[componentName];

      return Component && <Component key={index} path={path} />;
    });

    return all;
  };

  return data && <main> {renderComponents(data)}</main>;
}
