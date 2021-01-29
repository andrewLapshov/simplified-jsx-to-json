export type JsxCreateElementNode =
  | {
      type: string;
      props: { [key: string]: any };
      children: JsxCreateElementNode[];
    }
  | string;

declare function jsxToJson(
  input: string,
  props?: { [key: string]: any }
): JsxCreateElementNode;

export default jsxToJson;
