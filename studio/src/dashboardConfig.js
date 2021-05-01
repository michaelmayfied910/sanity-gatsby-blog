export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "608d373895a3f4180eccc96b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-3dxqa2fe",
                  apiId: "1395b98b-84dc-448f-b795-fa7906795db1",
                },
                {
                  buildHookId: "608d37380f73781825baa104",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-6t7pykei",
                  apiId: "31537104-5b1b-4210-9e39-f0d71036de4f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/michaelmayfied910/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-6t7pykei.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
