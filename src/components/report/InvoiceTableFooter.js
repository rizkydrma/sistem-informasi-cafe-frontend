import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontSize: 12,
    fontStyle: 'bold',
  },
  description: {
    width: '80%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
  },
  total: {
    width: '20%',
    textAlign: 'right',
    paddingRight: 8,
  },
});

const InvoiceTableFooter = ({ items }) => {
  const total = items
    .map((item) => item.qty * item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <View style={styles.row}>
      <Text style={styles.description}>TOTAL</Text>
      <Text style={styles.total}>{total + total * 0.1}</Text>
    </View>
  );
};

export default InvoiceTableFooter;
