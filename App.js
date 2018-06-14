import React from 'react';
import { AppLoading } from 'expo';
import { parse } from 'date-fns';
import Exercises from './src/components/Exercises';

const exercisesJson = require('./data/exercises.json');

const getExercises = () =>
  exercisesJson.map(exercise => ({
    ...exercise,
    date: exercise.date == null ? null : parse(exercise.date),
  }));

export default class App extends React.Component {
  state = { isReady: false, exercises: [] };

  componentWillMount() {
    this.setState({
      exercises: getExercises(),
      isReady: true,
    });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <Exercises exercises={this.state.exercises} />;
  }
}
