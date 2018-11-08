import * as React from 'react';

export interface IPassPropsExampleProps {
    name: string
}

export default class PassPropsExample extends React.Component<IPassPropsExampleProps, any> {
  public render() {
    return (
      <div>
        Hello World {this.props.name}
      </div>
    );
  }
}
