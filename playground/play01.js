const a = 1
const fn = () => {
  if (a) {
    return
  }

  return '1'
}

const arr = [1, 2, 3]
arr.map((item) => {
  return {
    item,
  }
})

const foo = {
  foo1: {
    foo2: {
      foo3: {
        foo4: {},
      },
    },
  },
}
const bar = {
  bar1: {
    bar2: {
      bar3: {
        bar4: {},
      },
    },
  },
}

if (
  foo.foo1.foo2.foo3.foo4 &&
  bar.bar1.bar2.bar3.bar4 &&
  foo.foo1 &&
  bar.bar1 &&
  bar.bar1.bar2 &&
  bar.bar1.bar2.bar3 &&
  bar.bar1.bar2.bar3.bar4
) {
  console.log('foo.bar')
}

if (foo) {
  bar()
}

var arr = [1, 2, 3]
arr
  .map((item) => item ** 2)
  .filter((item) => item > 2)
  .concat([4, 5, 6])
  .every((item) => item > 3)
