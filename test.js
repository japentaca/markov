import CtrlMarkov from "./CtrlMarkov.js"


let obj = {
  "Scale": [
    {
      "value": "Scale",
      "probability": 0
    },
    {
      "value": "Firulete",
      "probability": 0
    },
    {
      "value": "Random",
      "probability": 7
    },
    {
      "value": "Drunk",
      "probability": 13
    },
    {
      "value": "Markov",
      "probability": 12
    }
  ],
  "Firulete": [
    {
      "value": "Scale",
      "probability": 0
    },
    {
      "value": "Firulete",
      "probability": 0
    },
    {
      "value": "Random",
      "probability": 4
    },
    {
      "value": "Drunk",
      "probability": 6
    },
    {
      "value": "Markov",
      "probability": 6
    }
  ],
  "Random": [
    {
      "value": "Scale",
      "probability": 5
    },
    {
      "value": "Firulete",
      "probability": 11
    },
    {
      "value": "Random",
      "probability": 5
    },
    {
      "value": "Drunk",
      "probability": 11
    },
    {
      "value": "Markov",
      "probability": 11
    }
  ],
  "Drunk": [
    {
      "value": "Scale",
      "probability": 0
    },
    {
      "value": "Firulete",
      "probability": 2
    },
    {
      "value": "Random",
      "probability": 6
    },
    {
      "value": "Drunk",
      "probability": 6
    },
    {
      "value": "Markov",
      "probability": 9
    }
  ],
  "Markov": [
    {
      "value": "Scale",
      "probability": 0
    },
    {
      "value": "Firulete",
      "probability": 14
    },
    {
      "value": "Random",
      "probability": 55
    },
    {
      "value": "Drunk",
      "probability": 9
    },
    {
      "value": "Markov",
      "probability": 18
    }
  ]
}
let obj1 = create_markov(["a", "b", "c"])
console.log("obj1", obj1)
let mark = new CtrlMarkov(obj1)
let res
for (let i = 0; i < 105; i++) {
  res = mark.next()
  console.log("res:", res)
}

function create_markov(series) {
  let res = {}
  for (let i = 0; i < series.length; i++) {

    res[series[i]] = []
    for (let j = 0; j < series.length; j++) {

      res[series[i]].push({
        value: series[j],
        probability: 5
      })
    }
  }
  return res
}