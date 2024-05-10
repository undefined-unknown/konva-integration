import { openBlock as r, createElementBlock as a, createElementVNode as e, defineComponent as x, createBlock as T, normalizeProps as B, guardReactiveProps as b, withCtx as i, createVNode as c, createCommentVNode as d } from "vue";
import { u as g, g as v } from "./index-DX0sPVAI.mjs";
const y = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, k = /* @__PURE__ */ e(
  "path",
  {
    fill: "currentColor",
    d: "M17.3 19.3q-.275.275-.7.275t-.7-.275l-4.3-4.325q-.275-.275-.437-.637T11 13.575v-6.7L9.125 8.75q-.3.3-.712.3t-.713-.3t-.3-.7t.3-.7l3.6-3.625q.15-.15.325-.212T12 3.45t.375.063t.325.212L16.3 7.3q.3.3.3.713t-.3.712t-.712.313t-.713-.288L13 6.875V13.6l4.3 4.3q.275.275.275.7t-.275.7m-10.6.025q-.3-.3-.288-.712t.288-.688l1.775-1.8q.3-.3.713-.3t.712.3t.288.713t-.313.712L8.1 19.325q-.275.275-.7.275t-.7-.275"
  },
  null,
  -1
  /* HOISTED */
), q = [
  k
];
function $(l, s) {
  return r(), a("svg", y, [...q]);
}
const C = { name: "material-symbols-merge-type-rounded", render: $ }, w = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, E = /* @__PURE__ */ e(
  "path",
  {
    fill: "currentColor",
    d: "M8 13h8q.425 0 .713-.288T17 12t-.288-.712T16 11H8q-.425 0-.712.288T7 12t.288.713T8 13m4 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
  },
  null,
  -1
  /* HOISTED */
), L = [
  E
];
function V(l, s) {
  return r(), a("svg", w, [...L]);
}
const M = { name: "material-symbols-do-not-disturb-on-outline-rounded", render: V }, N = { class: "menu xpix-prop-menu" }, S = { class: "p-2" }, A = /* @__PURE__ */ e(
  "span",
  null,
  "Batch update not implemented yet",
  -1
  /* HOISTED */
), D = /* @__PURE__ */ e(
  "span",
  null,
  "Batch update",
  -1
  /* HOISTED */
), I = { class: "xpix-editor-prop" }, P = /* @__PURE__ */ e(
  "div",
  { class: "xpix-prop-header px-4 border-t border-b border-slate-700" },
  [
    /* @__PURE__ */ d(' <h4 class="py-4">Tools</h4> ')
  ],
  -1
  /* HOISTED */
), U = { class: "xpix-prop-main mx-4 py-5" }, H = /* @__PURE__ */ x({
  __name: "Mixed",
  props: {
    activeBlock: {}
  },
  setup(l) {
    const s = l, { editor: n } = g(), _ = () => n.getSelections().map((o) => n.getBlockById(o.path[0])).filter((o) => !!o);
    async function p() {
      const o = _();
      alert("Batch update not implemented yet"), console.log("batchUpdate:", o), o.forEach((t) => {
        console.log("select.block:", t.flavour, t), t.flavour === "shape" && n.updateBlock(t, {
          fill: t.fill === "#0A0" ? "#F00" : "#0A0"
        });
      });
    }
    function m() {
      n.getSelections().forEach((o) => {
        const t = n.getBlockById(o.path[0]);
        t && n.removeBlock(t);
      });
    }
    return (o, t) => {
      const u = M, h = C;
      return r(), T(
        v,
        B(b(s)),
        {
          ext: i(() => [
            e("div", I, [
              P,
              e("div", U, [
                e("button", {
                  type: "button",
                  class: "btn mr-2 mb-2",
                  onClick: t[1] || (t[1] = (f) => m())
                }, "Delete")
              ])
            ])
          ]),
          default: i(() => [
            e("ul", N, [
              e("li", null, [
                e("a", S, [
                  c(u),
                  A
                ])
              ]),
              e("li", null, [
                e("a", {
                  onClick: t[0] || (t[0] = (f) => p())
                }, [
                  c(h),
                  D
                ])
              ]),
              d(` <li>
        <a @click="deleteBlocks()">
          <i-material-symbols:delete-forever-outline-rounded></i-material-symbols:delete-forever-outline-rounded>
          <span>Delete</span>
        </a>
      </li> `)
            ])
          ]),
          _: 1
          /* STABLE */
        },
        16
        /* FULL_PROPS */
      );
    };
  }
});
export {
  H as default
};
