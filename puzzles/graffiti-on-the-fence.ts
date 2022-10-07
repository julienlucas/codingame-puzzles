const L = parseInt(readline());
const N = parseInt(readline());
let vals = []
for (let i = 0; i < N; i++) {
  var inputs = readline().split(' ');
  const st = parseInt(inputs[0]);
  const ed = parseInt(inputs[1]);

  vals.push({st,ed})
}

vals.sort((a,b) => a.st - b.st)

let unpainted = []
let high;

for (var i = 0; i < vals.length; i++) {
  let c = vals[i]
  let prev = vals[i - 1]
  let next = vals[i + 1]
  let last = vals[vals.length - 1]

  if (!prev && c.st !== 0) {
    unpainted.push({
      st: 0,
      ed: c.st
    })
  }

  if (c.st > high && next || c.st > high) {
    unpainted.push({
      st: high < c.st ? high : prev.ed,
      ed: c.st
    })
  }

  if (!high) {
    high = c.ed
  }

  if (c.ed > high) {
    high = c.ed
  }

  if (last?.ed < L && i === vals.length - 1) {
    unpainted.push({
        st: high > c.ed ? high : prev.ed > c.ed ? prev.ed : c.ed,
        ed: L
    })
  }
}

if (unpainted.length === 0) {
  console.log('All painted')
} else {
  unpainted.forEach(u => console.log(u.st,u.ed))
}
