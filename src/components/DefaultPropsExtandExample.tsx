import * as React from 'react';

export interface IDefaultPropsExtandProps extends IDefaultPropsType {
    requiredName: string,    
}

interface IDefaultPropsType {
    defaultName: string
}

export default class DefaultPropsExtand extends React.Component<IDefaultPropsExtandProps, any> {
    public static defaultProps :IDefaultPropsType = { defaultName: "world"};
  
    public render() {
    return (
      <div>
        Default Extend Props {this.props.defaultName} 
        Required Name {this.props.requiredName}
      </div>
    );
  }
}
