import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  reportTitle: {
    color: '#000',
    letterSpacing: 3,
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

const InvoiceTitle = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{title}</Text>
  </View>
);

export default InvoiceTitle;
