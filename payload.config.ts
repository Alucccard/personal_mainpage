import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    {
      slug: "users",
      admin: {
        useAsTitle: "email",
      },
      auth: true,
      fields: [
        {
          name: "email",
          type: "email",
          required: true,
        },
      ],
    },

    // ========== 新增：Portfolio Collection ==========
    {
      slug: "portfolios",
      admin: {
        useAsTitle: "title",
      },
      access: {
        read: async () => true, // 公开读取
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Short description shown on homepage",
        },
        {
          name: "detail",
          type: "richText",
          label: "Detailed description shown on project page",
        },
        {
          name: "technologies",
          type: "array",
          label: "Technologies used (e.g., React, Node.js)",
          fields: [
            {
              name: "tech",
              type: "text",
              label: "Technology Name",
              required: true,
            },
          ],
        },
        {
          name: "imageUrl",
          type: "text",
          label: "Image URL",
        },
        {
          name: "link",
          type: "text",
          label: "Project Link",
        },
        {
          name: "order",
          type: "number",
          defaultValue: 0,
          label: "Display Order",
        },
      ],
    },
    // ========== 新增：Blog Collection ==========
    {
      slug: "blogs",
      admin: {
        useAsTitle: "title",
      },
      access: {
        read: async () => true, // 公开读取
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "date",
          type: "date",
          required: true,
        },
        {
          name: "imageUrl",
          type: "text",
          label: "Image URL",
        },
        {
          name: "videoUrl",
          type: "text",
          label: "Video URL",
        },
        {
          name: "link",
          type: "text",
          label: "Blog Link",
        },
        {
          name: "commentCount",
          type: "number",
          defaultValue: 0,
          label: "Comment Count",
        },
        {
          name: "order",
          type: "number",
          defaultValue: 0,
          label: "Display Order",
        },
      ],
    },

    // ========== 新增：Intro Skills Collection ==========
    {
      slug: "intro-skills",
      admin: {
        useAsTitle: "title",
      },
      access: {
        read: async () => true, // 公开读取
      },
      fields: [
        {
          name: "icon",
          type: "text",
          label: "Icon URL (e.g., /images/skill1.png)",
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "order",
          type: "number",
          defaultValue: 0,
          label: "Display Order",
        },
      ],
    },
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || "" },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
