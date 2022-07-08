export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    initialValue: () => ({
      webTitle: 'Locavore',
    }),
    fields: [
      {
        name: 'webTitle',
        title: 'Website Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'SEO',
        description:
          'Search Engine Optimization allows to improve the ranking in search results.',
        name: 'seo',
        type: 'object',
        options: {
          collapsible: true,
        },
        fields: [
          {
            name: 'seo_description',
            description:
              'Enter up to 400 characters to describe this website. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
            type: 'string',
            title: 'Description',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'seo_keywords',
            description:
              'Enter some keywords to describe this website (separated by commas)',
            type: 'string',
            title: 'Keywords',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'seo_image',
            title: 'Image',
            description:
              '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
            type: 'image',
            validation: (Rule) => Rule.required(),
            fields: [
              {
                title: 'Edit Alt Text',
                name: 'alt',
                type: 'string',
                initialValue: 'Locavore NXT',
              },
            ],
          },
        ],
      },
      {
        name: 'googleID',
        description:
          'Place your Google Analytics ID here to link to your Google Analytics to see the website traffic statistic',
        title: 'Google Analytics ID',
        type: 'string',
      },
      {
        name: 'facebookID',
        title: 'Facebook Pixel ID',
        type: 'string',
      },
    ],
    preview: {
      prepare() {
        return {
          title: 'Settings',
        }
      },
    },
  }
  