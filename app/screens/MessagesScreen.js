import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Je suis un titre qui va etre truncate au bout de une ligne",
    description:
      "Je suis un titre qui va etre truncate au bout de une ligneJe suis un titre qui va etre truncate au bout de une ligne",
    image: require("../assets/17.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/17.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/17.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  // Create function to delete message
  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id != message.id)); // Return a new messages array

    // Call the server...
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/17.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
