import { defineComponent as a, openBlock as r, createBlock as s, normalizeProps as n, guardReactiveProps as p, withCtx as m, createElementVNode as c, toDisplayString as i } from "vue";
import { l } from "./index-DX0sPVAI.mjs";
const _ = { class: "p-5" }, g = /* @__PURE__ */ a({
  __name: "AIImageToImage",
  props: {
    toolName: {}
  },
  setup(e) {
    const o = e;
    return (t, f) => (r(), s(
      l,
      n(p(o)),
      {
        default: m(() => [
          c(
            "p",
            _,
            "TODO: " + i(t.toolName),
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
