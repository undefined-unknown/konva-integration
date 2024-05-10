import { defineComponent as r, openBlock as a, createBlock as s, normalizeProps as n, guardReactiveProps as p, withCtx as c, createElementVNode as i, toDisplayString as m } from "vue";
import { v as l } from "./index-q-jOYoXR.mjs";
const _ = { class: "p-5" }, g = /* @__PURE__ */ r({
  __name: "MagicEraser",
  props: {
    toolName: {}
  },
  setup(e) {
    const o = e;
    return (t, f) => (a(), s(
      l,
      n(p(o)),
      {
        default: c(() => [
          i(
            "p",
            _,
            "TODO: " + m(t.toolName),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
});
export {
  g as default
};
