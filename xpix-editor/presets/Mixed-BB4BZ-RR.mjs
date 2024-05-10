import { defineComponent as u, openBlock as m, createBlock as f, normalizeProps as x, guardReactiveProps as b, withCtx as s, createElementVNode as t, createCommentVNode as n } from "vue";
import { u as h, o as _ } from "./index-q-jOYoXR.mjs";
const y = { class: "menu xpix-prop-menu" }, B = /* @__PURE__ */ t(
  "li",
  null,
  [
    /* @__PURE__ */ t("a", { class: "p-2" }, [
      /* @__PURE__ */ n(" <i-material-symbols:do-not-disturb-on-outline-rounded></i-material-symbols:do-not-disturb-on-outline-rounded> "),
      /* @__PURE__ */ t("span", null, "Batch update not implemented yetxxxx")
    ])
  ],
  -1
  /* HOISTED */
), k = /* @__PURE__ */ t(
  "span",
  null,
  "Batch update",
  -1
  /* HOISTED */
), v = { class: "xpix-editor-prop" }, g = /* @__PURE__ */ t(
  "div",
  { class: "xpix-prop-header px-4 border-t border-b border-slate-700" },
  [
    /* @__PURE__ */ n(' <h4 class="py-4">Tools</h4> ')
  ],
  -1
  /* HOISTED */
), C = { class: "xpix-prop-main mx-4 py-5" }, $ = /* @__PURE__ */ u({
  __name: "Mixed",
  props: {
    activeBlock: {}
  },
  setup(r) {
    const a = r, { editor: l } = h(), i = () => l.getSelections().map((o) => l.getBlockById(o.path[0])).filter((o) => !!o);
    async function d() {
      const o = i();
      alert("Batch update not implemented yet"), console.log("batchUpdate:", o), o.forEach((e) => {
        console.log("select.block:", e.flavour, e), e.flavour === "shape" && l.updateBlock(e, {
          fill: e.fill === "#0A0" ? "#F00" : "#0A0"
        });
      });
    }
    function c() {
      l.getSelections().forEach((o) => {
        const e = l.getBlockById(o.path[0]);
        e && l.removeBlock(e);
      });
    }
    return (o, e) => (m(), f(
      _,
      x(b(a)),
      {
        ext: s(() => [
          t("div", v, [
            g,
            t("div", C, [
              t("button", {
                type: "button",
                class: "btn mr-2 mb-2",
                onClick: e[1] || (e[1] = (p) => c())
              }, " Delete ")
            ])
          ])
        ]),
        default: s(() => [
          t("ul", y, [
            B,
            t("li", null, [
              t("a", {
                onClick: e[0] || (e[0] = (p) => d())
              }, [
                n(" <i-material-symbols:merge-type-rounded></i-material-symbols:merge-type-rounded> "),
                k
              ])
            ]),
            n(` <li>
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
    ));
  }
});
export {
  $ as default
};
