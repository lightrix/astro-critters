import p from"critters";import a from"./options/index.js";import{files as c}from"files-pipeline";import n from"files-pipeline/dist/lib/deepmerge.js";import{fileURLToPath as l}from"url";import m from"files-pipeline/dist/lib/apply-to.js";var x=(t={})=>{for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e]===!0&&(t[e]=a[e]);t=n(a,t);const r=new Set;if(typeof t.path<"u"&&(t.path instanceof Array||t.path instanceof Set))for(const e of t.path)r.add(e);return{name:"astro-critters",hooks:{"astro:build:done":async({dir:e})=>{if(r.size||r.add(e),console.log(e),console.log(r),!!t.critters)for(const s of r){const o=await m(s,i=>i instanceof URL?l(i):i),f=new p(n(t.critters,{path:o instanceof Map?o.keys().next().value:o,logLevel:(()=>{switch(t.logger){case 0:return"silent";case 1:return"silent";case 2:return"info";default:return"info"}})()}));await(await(await(await new c(t.logger).in(s)).by("**/*.html")).not(t.exclude)).pipeline(n(a.pipeline,{wrote:async i=>f.process(i.buffer.toString())}))}}}}};export{x as default};
