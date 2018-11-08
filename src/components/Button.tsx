import * as React from "react";
import { themeType } from "./Types";

export interface IButtonProps {
  theme: themeType;
  name: string;
}

export default class Button extends React.Component<IButtonProps> {
  public render() {
    return (
      <button className={`button button-${this.props.theme}`}>
        {this.props.name}
      </button>
    );
  }
}
