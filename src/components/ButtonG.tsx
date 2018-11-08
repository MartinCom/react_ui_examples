import * as React from "react";

export interface IButtonGProps {
  name: string;
}


export default class ButtonG extends React.Component<IButtonGProps> {
  public  static contextType = ThemeContext;

  public render() {
    return (
      <button className={`button button-${this.context}`}>
        {this.props.name}
      </button>
    );
  }
}
