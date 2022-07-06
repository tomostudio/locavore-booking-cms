import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const linkRender = (props) => (
  <span>
    {props.children}
    <FiExternalLink />
  </span>
)

const walinkRender = (props) => (
    <span>
      {props.children}
      <AiOutlineWhatsApp />
    </span>
  )

export default {
  title: 'Block Editor',
  name: 'blockEditor',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Strike', value: 'strike-through' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            blockEditor: {
              icon: () => <FiExternalLink />,
              render: linkRender,
            },
            fields: [
              {
                name: 'url',
                type: 'url',
              },
            ],
          },
          {
            name: 'wa_link',
            type: 'object',
            title: 'Wa Link',
            blockEditor: {
              icon: () => <AiOutlineWhatsApp />,
              render: walinkRender,
            },
            fields: [
              {
                name: 'url',
                type: 'url',
              },
            ],
          },
        ],
      },
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
      ],
      lists: [],
    },
    {
      title: 'Button',
      name: 'button',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Url',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'Line Divider',
      name: 'lineDivider',
      type: 'object',
      fields: [
        {
          title: 'Spacer',
          name: 'spacer',
          type: 'boolean',
          readOnly: true,
          initialValue: true,
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Line Divider',
          }
        },
      },
    },
    {
      title: 'Dot Divider',
      name: 'dotDivider',
      type: 'object',
      fields: [
        {
          title: 'Spacer',
          name: 'spacer',
          type: 'boolean',
          readOnly: true,
          initialValue: true,
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Dot Divider',
          }
        },
      },
    },
    {
      title: 'Menu',
      name: 'menu',
      type: 'object',
      fields: [
        {
          title: 'List',
          name: 'list',
          type: 'array',
          of: [
            {
              title: 'List',
              name: 'list',
              type: 'object',
              fields: [
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                },
                {
                  title: 'Price',
                  name: 'price',
                  type: 'string',
                },
                {
                  title: 'Description',
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
