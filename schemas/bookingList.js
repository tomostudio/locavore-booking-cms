export default {
  name: 'bookingList',
  title: 'Booking List',
  type: 'document',
  fields: [
    {
      name: 'page_title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        "Slug is generated from Title, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((slug) => {
          const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/
          if (slug) {
            if (slug.current.match(regex) !== null) {
              return true
            } else {
              return 'Not a valid slug'
            }
          } else {
            return 'Required'
          }
        }),
    },
    {
      title: 'RSVP',
      name: 'rsvp',
      type: 'object',
      fields: [
        {
          title: 'ID',
          name: 'id',
          type: 'number',
        },
        {
          title: 'Path',
          name: 'path',
          type: 'string',
        },
      ],
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
            'Enter up to 400 characters to describe the Homepage. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          description:
            'Enter some keywords to describe the Homepage (separated by commas)',
          type: 'string',
          title: 'Keywords',
        },
        {
          name: 'seo_image',
          title: 'Image',
          description:
            '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
          type: 'image',
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
              initialValue: 'Locavore NXT',
            },
          ],
        },
      ],
    },
    {
      title: 'Cover Image',
      name: 'cover_image',
      type: 'image',
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
          initialValue: 'Locavore NXT',
        },
      ],
    },
    {
      title: 'Content Top',
      name: 'content_top',
      type: 'blockEditor',
    },
    {
      title: 'Content Bottom',
      name: 'content_bottom',
      type: 'blockEditor',
    },
    {
      title: 'Popup',
      name: 'popup',
      type: 'array',
      of: [
        {
          title: 'Popup',
          name: 'popup',
          type: 'object',
          fields: [
            {
              title: 'Button Text',
              name: 'button_text',
              type: 'string',
            },
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Content',
              name: 'content',
              type: 'blockPopup',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'page_title',
      media: 'cover_image',
    },
  },
}
