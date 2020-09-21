import { html, customElement, LitElement } from "lit-element";
import styles from "./input-css";
//import "@orxe-components/icon";
//import "@orxe-components/icons";

@customElement("orxe-input")
export default class OrxeInput extends LitElement {
  value: string;
  outline: boolean;
  disabled: boolean;
  type: string;
  label: string;
  isFocus: boolean;
  placeholder: string;
  idval: string = "";
  required: boolean;
  max: number;
  min: number;
  readonly: boolean;
  isActive: boolean;
  class: string;
  isFilled: boolean;
  isError: boolean;

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

  constructor() {
    super();
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

  checkClass() {
    if (this.isActive) {
      this.class = "input-class" + " " + "active";
     /*  return html`
        <orxe-icon
          class="close-icon"
          icon="ic-close"
          aria-label="close icon"
          size="small"
        >
        </orxe-icon>
      `; */
    } else if (this.isError) {
      this.class = "input-class" + " " + "error";
      return html`
        <span class="error-msg">Error Message</span>
      `;
    } else if (this.isFilled) {
      this.class = "input-class" + " " + "filled";
    } else if (this.isFocus) {
      this.class = "input-class" + " " + "focus";
    } else {
      this.class = "input-class";
    }
  }

  render() {
    const str = this.checkClass();
    return html`
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
    this.dispatchEvent(
      new CustomEvent("val-change", {
        detail: { value: event.currentTarget.value },
      })
    );
  }

  static styles = styles;
}
