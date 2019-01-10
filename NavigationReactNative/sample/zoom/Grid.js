import React from 'react';
import {StyleSheet, ScrollView, Text, View, TouchableHighlight} from 'react-native';
import {NavigationContext} from 'navigation-react';
import {SharedElementAndroid} from 'navigation-react-native';

const colors = [
  'maroon', 'red', 'crimson', 'orange', 'brown', 'sienna', 'olive',
  'purple', 'fuchsia', 'indigo', 'green', 'navy', 'blue', 'teal', 'black'
];

export default () => (
  <NavigationContext.Consumer>
    {({stateNavigator}) => (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.colors}>
          {colors.map(color => (
            <TouchableHighlight
              key={color}
              style={styles.color}
              underlayColor={color}                
              onPress={() => {
                stateNavigator.navigate('detail', {
                  color, sharedElements: [color]
                });
              }}>
              <SharedElementAndroid name={color}
                style={[styles.shared, {backgroundColor: color}]}>
                <Text style={styles.text}>{color}</Text>
              </SharedElementAndroid>
            </TouchableHighlight>
          ))}
        </View>
      </ScrollView>
    )}
  </NavigationContext.Consumer>
);

const styles = StyleSheet.create({
  colors: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  color: {
    width: 100,
    height: 150,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  shared: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  }
});