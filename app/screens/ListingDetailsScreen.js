import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({route}) {
  const Listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={Listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{Listing.title}</AppText>
        <AppText style={styles.price}>{Listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/17.jpg")}
            title="Marc Richet"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontSize: 24,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
      marginVertical: 40,
  }
});

export default ListingDetailsScreen;
