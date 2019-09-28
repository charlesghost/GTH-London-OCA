import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon
} from "native-base";
const cards = [
  {
    text: "Deep Breath techniques",
    name: `1. Let your lips part. Make a whooshing sound, exhaling completely through your mouth.
2. Close your lips, inhaling silently through your nose as you count to four in your head.
3. For seven seconds, hold your breath.
When you inhale again, you initiate a new cycle of breath. Practice this pattern for four full breaths`,
    image: require("./assets/Breath_cartoon.png")
  },
  {
    text: "Deep Breath",
    name:
      "Try these Emotional Coping Strategies: 1.Practice mindfulness to help slow down our anxious processing of thoughts and emotions\r\n2.Learn Your Triggers giving you the option to avoid those triggers during your day to day.",
    image: require("./assets/emotional.png")
  },
  {
    text: "Self Care",
    name:
      "Self care is very important. Here are some tips to make you feel better on the move.\r\n1. Listen to music\r\n2.Eat something light and heathly\r\n3.Smile its proven to make you happier",
    image: require("./assets/self-care.jpg")
  },
  {
    text: "Social Coping Strategies",
    name:
      "Anxiety can lead us to believe that we are alone in our experience and no one will be able to relate. This is not true. Talk to someone or lovejoy",
    image: require("./assets/talking.png")
  }
];

export default class DeckSwipeHelp extends Component {
  render() {
    return (
      <DeckSwiper
        dataSource={cards}
        renderItem={item => (
          <Card style={styles.card}>
            <CardItem style={{ backgroundColor: "#f5d5d1" }}>
              <Left>
                <Thumbnail source={item.image} />
                <Body style={{ backgroundColor: "#f5d5d1" }}>
                  <Text>{item.text}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{ backgroundColor: "#f5d5d1" }}>
              <Image style={styles.cardimg} source={item.image} />
            </CardItem>
            <CardItem style={{ backgroundColor: "#f5d5d1" }}>
              <Text>{item.name}</Text>
            </CardItem>
          </Card>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    flex: 1,
    borderRadius: 10
  },
  cardimg: {
    height: 300,
    flex: 1
  }
});
