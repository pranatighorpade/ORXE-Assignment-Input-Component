import { LitElement } from "lit-element";
export default class OrxeInput extends LitElement {
    value: string;
    outline: boolean;
    disabled: boolean;
    type: string;
    label: string;
    isFocus: boolean;
    placeholder: string;
    idval: string;
    required: boolean;
    max: number;
    min: number;
    readonly: boolean;
    isActive: boolean;
    class: string;
    isFilled: boolean;
    isError: boolean;
    static get properties(): {
        type: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        value: {
            type: StringConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        outline: {
            type: BooleanConstructor;
        };
        isFocus: {
            type: BooleanConstructor;
        };
        required: {
            type: BooleanConstructor;
        };
        min: {
            type: NumberConstructor;
        };
        max: {
            type: NumberConstructor;
        };
        readonly: {
            type: BooleanConstructor;
        };
        isActive: {
            type: BooleanConstructor;
        };
        isFilled: {
            type: BooleanConstructor;
        };
        isError: {
            type: BooleanConstructor;
        };
    };
    constructor();
    checkClass(): import("lit-element").TemplateResult | undefined;
    render(): import("lit-element").TemplateResult;
    handleEvent(event: any): void;
    static styles: import("lit-element").CSSResult;
}
