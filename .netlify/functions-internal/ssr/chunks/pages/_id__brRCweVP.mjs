/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_HdYEuGLt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'cssesc';
import { $ as $$Layout } from './404_vwRWD8o-.mjs';

const getLaunchBy = async ({ id }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  return launch;
};
const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit: 10
      }
    })
  });
  const { docs: launches } = await res.json();
  return launches;
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch;
  if (id) {
    launch = await getLaunchBy({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex justify-center items-center gap-y-4 flex-col"> <img class="w-52 h-auto"${addAttribute(launch?.links?.patch.small, "src")}${addAttribute(launch?.name, "alt")}> <h2 class="text-4xl text-white font-bold">Launch #${launch?.flight_number}</h2> <p class="text-lg">${launch?.details}</p> </article> ` })}`;
}, "D:/Users/ue0100063m/Documents/LuisPalacios/Personal LP/GitHub/curso-demo-astro/src/pages/launch/[id].astro", void 0);

const $$file = "D:/Users/ue0100063m/Documents/LuisPalacios/Personal LP/GitHub/curso-demo-astro/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, getLatestLaunches as g };
