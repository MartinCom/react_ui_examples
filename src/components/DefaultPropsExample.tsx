import * as React from 'react';

export interface IDefaultPropsExampleProps {
    defaultName: string,
    requiredName: string
}

export default class DefaultPropsExample extends React.Component<IDefaultPropsExampleProps, any> {
    public static defaultProps  = { defaultName: "world"};
  
    public render() {
    return (
      <div>
        Default Props {this.props.defaultName} 
        Required Name {this.props.requiredName}
      </div>
    );
  }
}
