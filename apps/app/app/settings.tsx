import React from 'react'

import { Nodes } from './settings/Nodes'
import { Preferences } from './settings/Preferences'
import { YStack, useMedia } from 'tamagui'
import { ScrollView } from 'react-native'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../constants/layout'
import { Torrents } from './settings/Torrents'

export default function Settings() {
  const media = useMedia()

  return (
    <ScrollView>
      <YStack
        w="100%"
        alignSelf="center"
        flexShrink={1}
        gap="$16"
        pb="$4"
        px={media.gtXs ? '$8' : '$2'}
        {...(media.gtXs && { w: DESKTOP_MAX_CONTENT_WIDTH })}
      >
        <Nodes />
        <Preferences />
        <Torrents />
      </YStack>
    </ScrollView>
  )
}
