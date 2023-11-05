# markov
Adaptación de la función CtrlMarkov que abandonó el equipo de ToneJS

Input:

Object where each key is an an object state.
state must have an array of probabilities for each state
Example:
```js
{
  a: [
    { value: 'a', probability: 5 },
    { value: 'b', probability: 5 },
    { value: 'c', probability: 5 }
  ],
  b: [
    { value: 'a', probability: 5 },
    { value: 'b', probability: 5 },
    { value: 'c', probability: 5 }
  ],
  c: [
    { value: 'a', probability: 5 },
    { value: 'b', probability: 5 },
    { value: 'c', probability: 5 }
  ]
}

