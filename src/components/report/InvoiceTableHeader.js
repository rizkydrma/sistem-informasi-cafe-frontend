import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#000',
    backgroundColor: '#dadada',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
  },
  description: {
    width: '40%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  rate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  tax: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: '20%',
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.description}>Item Description</Text>
    <Text style={styles.qty}>Qty</Text>
    <Text style={styles.rate}>@</Text>
    <Text style={styles.tax}>Tax</Text>
    <Text style={styles.amount}>Amount</Text>
  </View>
);

export default InvoiceTableHeader;
