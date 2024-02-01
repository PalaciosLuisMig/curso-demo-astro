/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_HdYEuGLt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout } from './404_vwRWD8o-.mjs';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About the project" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>
About the project
</h1> <p>
The SpaceX Launches projects is a demo for the Austro course with Midudev.
</p> ` })}`;
}, "D:/Users/ue0100063m/Documents/LuisPalacios/Personal LP/GitHub/curso-demo-astro/src/pages/about.astro", void 0);

const $$file = "D:/Users/ue0100063m/Documents/LuisPalacios/Personal LP/GitHub/curso-demo-astro/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
