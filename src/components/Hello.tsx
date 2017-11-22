import * as React from "react";

export default class Hello extends React.Component<any, any>{
    constructor(props: any){
        super(props)
    }

    render() {
        return (
            <div style={{backgroundColor: 'Blue'}}>
                <h1>Hello World!!!!</h1>
            </div>
            );
    }
}