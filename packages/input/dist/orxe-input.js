var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement } from "lit-element";
import styles from "./input-css";
let OrxeInput = class OrxeInput extends LitElement {
    constructor() {
        super();
        this.idval = "";
        this.value = "";
        this.outline = true;
        this.disabled = false;
        this.label = "";
        this.type = "";
        this.isFocus = false;
        this.placeholder = "";
        this.required = false;
        this.min = 0;
        this.max = 0;
        this.readonly = false;
        this.isActive = false;
        this.class = "input-class";
        this.isFilled = false;
        this.isError = false;
    }
    static get properties() {
        return {
            type: { type: String },
            label: { type: String },
            value: { type: String },
            placeholder: { type: String },
            disabled: { type: Boolean },
            outline: { type: Boolean },
            isFocus: { type: Boolean },
            required: { type: Boolean },
            min: { type: Number },
            max: { type: Number },
            readonly: { type: Boolean },
            isActive: { type: Boolean },
            isFilled: { type: Boolean },
            isError: { type: Boolean },
        };
    }
    checkClass() {
        if (this.isActive) {
            this.class = "input-class" + " " + "active";
        }
        else if (this.isError) {
            this.class = "input-class" + " " + "error";
            return html `
        <span class="error-msg">Error Message</span>
      `;
        }
        else if (this.isFilled) {
            this.class = "input-class" + " " + "filled";
        }
        else if (this.isFocus) {
            this.class = "input-class" + " " + "focus";
        }
        else {
            this.class = "input-class";
        }
    }
    render() {
        const str = this.checkClass();
        return html `
      <div class="form-group">
        <input
          class=${this.class}
          id="inputfield"
          aria-label="input-text"
          @keypress=${this.handleEvent}
          @blur=${this.handleEvent}
          type="${this.type}"
          placeholder=${this.placeholder}
          .value=${this.value}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          ?min=${this.min}
          ?max=${this.max}
        />
        ${str}
        <label>${this.label}</label>
      </div>
    `;
    }
    handleEvent(event) {
        this.dispatchEvent(new CustomEvent("val-change", {
            detail: { value: event.currentTarget.value },
        }));
    }
};
OrxeInput.styles = styles;
OrxeInput = __decorate([
    customElement("orxe-input"),
    __metadata("design:paramtypes", [])
], OrxeInput);
export default OrxeInput;
