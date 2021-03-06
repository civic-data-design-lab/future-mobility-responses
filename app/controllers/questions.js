import Controller from '@ember/controller';
import opacity from 'ember-animated/motions/opacity';
import { computed } from '@ember-decorators/object';
import { scaleLinear } from 'd3';

// upper bounds of range for proportional
// scale of answer cards
const UPPER_SCALE = 300;
const ANIMATION_DURATION = 300;

export default class QuestionsController extends Controller {
  duration = ANIMATION_DURATION;
  // scale the answer counts down to preserve proportion
  // and keep rendering inexpensive
  @computed('model.answers')
  get scaledAnswers() {
    const { answers, meta: { min, max } } = this.get('model');
    const scale = scaleLinear()
      .domain([min, max])
      .rangeRound([1, UPPER_SCALE]);

    return answers
      .map((answer) => ({ ...answer, total: scale(answer.total) }));
  }

  transition = function* ({ insertedSprites, receivedSprites, removedSprites }) {
    insertedSprites.forEach(sprite => {
      opacity(sprite, { from: 0, to: 1 });
    });

    receivedSprites.forEach(sprite => {
      opacity(sprite, { from: 0,  to: 1 });
    });

    removedSprites.forEach(sprite => {
      opacity(sprite, { from: 1, to: 0 });
    });
  }
}
