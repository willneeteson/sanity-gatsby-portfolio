export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61de8fc078f171e1eac56181',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-i3e8ns9h',
                  apiId: 'd493dda9-f983-4e6f-8175-f745a5c5737a'
                },
                {
                  buildHookId: '61de8fc1519bd1f1d6184f0c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sibhiiyu',
                  apiId: '45daf250-2d1f-413d-b6ba-b5beace31f8f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/willneeteson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sibhiiyu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
