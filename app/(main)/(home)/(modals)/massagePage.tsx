//import liraries
import SingleMessageView from '@/components/host_rental_panel/chat/MessageView';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Page = () => {
  return (
    <SingleMessageView />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Page;
