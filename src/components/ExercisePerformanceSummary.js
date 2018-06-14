import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const formatDate = date => format(date, 'ddd D MMM, YY');

const ExercisePerformanceSummary = ({ name, date }) => (
  <View style={styles.container}>
    <Text>{name}</Text>
    {date !== null && (
      <View>
        <Text>Last Exercise</Text>
        <Text>{formatDate(date)}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    // /flex: 1,
    height: 100,
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});

ExercisePerformanceSummary.defaultProps = {
  date: null,
};

ExercisePerformanceSummary.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
};

export default ExercisePerformanceSummary;
