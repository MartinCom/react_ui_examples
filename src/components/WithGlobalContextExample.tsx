import * as React from 'react';
import ButtonG from './ButtonG';

export interface IWithGlobalContextProps {
    name: string;
}

const ThemeContext = React.createContext('blue');

export default class WithGlobalContext extends React.Component<IWithGlobalContextProps, any> {
  public render() {
    return (
      <div>
        return (
      <ThemeContext.Provider value="gray">
        <ButtonG name={this.props.name} />
      </ThemeContext.Provider>
    );
      </div>
    );
  }
}
