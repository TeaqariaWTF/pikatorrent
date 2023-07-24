import React from 'react'
import { FlatList } from 'react-native'
import { TorrentCard, TorrentCardPlaceHolder } from '../components/TorrentCard'
import { useTorrents } from '../hooks/useTorrents'
import { XStack, YStack } from 'tamagui'
import { AddTorrentDialog } from '../dialogs/AddTorrentDialog'
import { SearchBar } from '../components/SearchBar'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../constants/layout'
import { GlobalStats } from '../components/GlobalStats'

export default function Torrents() {
  return (
    <YStack f={1}>
      <XStack mx="auto" w="100%" maxWidth={DESKTOP_MAX_CONTENT_WIDTH}>
        <AddTorrentDialog />
        <SearchBar />
      </XStack>
      <GlobalStats />
      <TorrentsList />
    </YStack>
  )
}

const TorrentsList = () => {
  const { torrents } = useTorrents()

  if (torrents.length === 0) {
    return <TorrentCardPlaceHolder />
  }

  return (
    <FlatList
      contentContainerStyle={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 4,
        maxWidth: DESKTOP_MAX_CONTENT_WIDTH,
      }}
      data={(torrents || []).map((torrent) => ({
        torrent,
      }))}
      renderItem={({ item }) => (
        <TorrentCard key={item.torrent.id} torrent={item.torrent} />
      )}
    />
  )
}
