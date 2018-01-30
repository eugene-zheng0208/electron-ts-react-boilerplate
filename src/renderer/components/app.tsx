
import * as React from "react";
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {RaisedButton} from 'material-ui';
/**
 * 
 * 
 * @interface IAppProps
 */
/**
 * 
 * 
 * @interface IAppProps
 */
export interface IAppProps {
    // tslint:disable-next-line:indent
    onClickIncrementButton;
    onClickDecrementButton;
counter;
}

export interface IAppState {
    // tslint:disable-next-line:indent
    counter: number;
}

const inlineStyle = {
    margin: 12,
};

/**
 * App
 */
export class AppComponent extends React.Component<IAppProps, IAppState> {
constructor(props: IAppProps) {
        super(props);
    }
	/**
	 * render
	 */
    public render(): JSX.Element {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Hello React World! </h1>
                    <h2>{this.props.counter}</h2>
                    <RaisedButton label="インクリメント" onClick={this.props.onClickIncrementButton} style={inlineStyle} primary={true} ></RaisedButton>
                    <RaisedButton label="デクリメント" onClick={this.props.onClickDecrementButton} style={inlineStyle} secondary={true} ></RaisedButton>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AppComponent;
