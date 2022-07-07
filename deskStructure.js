import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import {
  FiSettings,
  FiBook,
  FiFile,
  FiHome,
  FiStar,
  FiBookmark,
  FiFileText,
  FiFlag,
  FiFilter,
  FiAward,
  FiUsers,
  FiSliders,
} from 'react-icons/fi'

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings', 'home', 'bookingList'].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Pages')
        .icon(() => <FiFile />)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(() => <FiHome />)
                .child(S.document().schemaType('home').documentId('home')),
              S.documentTypeListItem('bookingList').icon(() => <FiFileText />),
            ]),
        ),
      S.listItem()
        .title('Settings')
        .icon(() => <FiSettings />)
        .child(S.document().schemaType('settings').documentId('settings')),
    ])
