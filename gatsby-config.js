module.exports = {
  siteMetadata: {
    pathPrefix: "/docs",
    // Site URL for when it goes live
    siteUrl: `https://coolexplorer.github.io`,
    // Your Name
    name: "Allen Seunghwan Kim",
    // Main Site Title
    title: `Allen Kim | Software Quality Engineer & DevOps`,
    // Description that goes under your name in main bio
    description: `Test Automation, Test environment, and Load Test Specialist`,
    // Optional: Twitter account handle
    author: `@coolexplorer`,
    // Optional: Github account URL
    github: `https://github.com/coolexplorer`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/allen-kim-132887124/`,
    // Content of the About Me section
    about: `SQE for Various Functional and Non-Functional Automation (including Load Test (Performance Test)), DevOps for Test Automation Environment`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: "Load Test (Performace Test)",
        description:
          "Game server load test to get the high reliability and availability",
        link: "",
      },
      {
        name: "Test Automation - Client and Server Automation",
        description:
          "Test Automation Script implementation and Setting up the environment",
        link: "",
      },
      {
        name: "The Cluster for Software Quality Tools",
        description:
          "Kubernetest environment to manage the Automation Tools for Software Quality Engineer",
        link: "",
      },
      {
        name: "kube-consul-registrator",
        description:
          "Registering Microservice information to Consul in the Kubernetes",
        link: "",
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: "Electornic Arts",
        description: "Full-Stack Developer, February 2020 - Present",
        link: "https://www.ea.com",
      },
      {
        name: "Kohyoung Technology",
        description: "Full-Stack Developer, December 2017 - February 2020",
        link: "https://www.kohyoung.com",
      },
      {
        name: "Samsung Electronics",
        description: "Software Engineer, March 2006 - May 2015",
        link: "https://www.samsung.com/us/aboutsamsung/home/",
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: "Languages & Frameworks",
        description:
          "Python, Scala, Groovy, C#, dotnet, Java | Gatling, Akka, BDD(Serenity)",
      },
      {
        name: "Test Automation - CI/CD",
        description: "Jenkins, Gitlab CI, Ansible",
      },
      {
        name: "Cluster Environment",
        description: "Kubernetes, Rancher, GitOps(Fleet), Helm",
      },
      {
        name: "Monitoring & Database",
        description:
          "Grafana, Prometheus, Influxdb, Zabbix, Elasticsearch, Logstash, Kibana, Telegraf, PostgreSQL, MongoDB",
      },
      {
        name: "Others",
        description: "Git, Perforce, JaaS(Jira), Confluence, Slack",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
