---
to: <%= abs_path %>/index.tsx
---
import type { FC } from "react";
import tw from "twin.macro";
<% if (have_props) { -%>
import type { <%= upper_component_name %>Properties } from "./types/model";
<% } -%>

const <%= upper_component_name %>:<% if (have_props) { -%> FC<<%= upper_component_name %>Properties> <% } else { -%> FC <% } -%>= <%= props %> => (
  <div></div>
);

export { <%= upper_component_name %> };
