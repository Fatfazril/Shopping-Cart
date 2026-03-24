const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shopping Cart API",
      version: "1.0.0",
      description: "REST API for a Shopping Cart application with authentication, products, and cart management.",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3300}`,
        description: "Local development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Enter your JWT token (from /api/auth/login)",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            id:    { type: "string", format: "uuid" },
            email: { type: "string", format: "email" },
          },
        },
        Product: {
          type: "object",
          properties: {
            id:    { type: "string", format: "uuid" },
            name:  { type: "string" },
            price: { type: "number", format: "float" },
            stock: { type: "integer" },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
