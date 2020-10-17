import sample from 'lodash/sample';

import female from './config/female.json';
import male from './config/male.json';

export const fetchName = () => sample([ ...female.names, ...males.names ])

export const fetchFemaleName = () => sample(female.names);

export const fetchMaleName = () => sample(males.names);
