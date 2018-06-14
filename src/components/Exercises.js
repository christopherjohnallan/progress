import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExercisePerformanceSummary from './ExercisePerformanceSummary';

const Exercises = ({ exercises }) => (
  <View style={styles.container}>
    <FlatList
      style={styles.exercises}
      data={exercises}
      renderItem={({ item }) => <ExercisePerformanceSummary name={item.name} date={item.date} />}
      keyExtractor={item => item.id.toString()}
    />
    <Icon name="add-circle" style={styles.addIcon} size={60} color="#10ed14" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  exercises: {
    flex: 1,
  },
  addIcon: {
    // height: 60,
    alignSelf: 'flex-end',
  },
});

Exercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.instanceOf(Date),
  })).isRequired,
};

export default Exercises;
