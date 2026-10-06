import { jsx as r } from "react/jsx-runtime";
function i({ url: t, room: e }) {
  return /* @__PURE__ */ r("iframe", {
    title: "Rocket.Chat",
    src: `${t}/group/${e}?layout=embedded`,
    style: {
      width: "100%",
      height: "100%",
      border: 0
    }
  });
}
export {
  i as Kit
};
