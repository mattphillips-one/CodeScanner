/*
  Problems:
  - News links needs better format
  - Perhaps add content previews
*/

import { Text, View, StyleSheet, TouchableOpacity, Linking } from "react-native";

type GuardianResponseType = {
  id: string,
  type: string,
  sectionId: string,
  sectionName: string,
  webPublicationDate: string,
  webTitle: string,
  webUrl: string,
  apiUrl: string,
  isHosted: boolean,
  pillarId: string,
  pillarName: string
}

type Props = {
  item: GuardianResponseType
}

export default function GuardianLink({item}: Props) {
  const { webTitle, webUrl, sectionId } = item;

  // an unsophisticated filter to omit articles in section 'film'
  if (sectionId === 'film') {
    return <></>;
  }

  return (
    <TouchableOpacity
    style={styles.container}
    onPress={() => Linking.openURL(webUrl)}
    >
      <Text style={styles.title}>{webTitle}</Text>
      <Text style={styles.link}>{webUrl}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  link: {
    fontSize: 12,
    color: 'grey'
  }
})