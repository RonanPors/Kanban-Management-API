import expressJSDocSwagger from "express-jsdoc-swagger";

const optionSwagger = {
  info: {
    version: "1.0.0",
    title: "KANBAN API Manager",
  },
  security: {
    BasicAuth: {
      type: "http",
      scheme: "basic",
    },
  },
  baseDir: import.meta.dirname,
  filesPattern: "../../**/*.js",
  swaggerUIPath: "/documentation",
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: "/v3/api-docs",
  notRequiredAsNullable: false,
  swaggerUiOptions:  {},
};

// Currying the function to be able to pass the optionSwagger object
export default (app) => expressJSDocSwagger(app)(optionSwagger);
