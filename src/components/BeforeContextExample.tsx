import * as React from "react";
import Button from "./Button";
import { themeType } from "./Types";

export interface IBeforeContextProps {
  theme: themeType;
  name: string;
}

export default class BeforeContext extends React.Component<IBeforeContextProps> {
  public render() {
    return (
      <div>
        BeforeContext
        <Button theme={this.props.theme} name={this.props.name} />
      </div>
    );
  }
}
