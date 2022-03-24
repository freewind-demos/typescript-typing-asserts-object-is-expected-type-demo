function assertNotNull<T>(obj: T | null): asserts obj is T {
  if (obj === null) {
    throw new Error('obj is null')
  }
}

function main() {
  const name: string | null = 'aaa';
  assertNotNull(name)

  // now the 'name' is not possible to be a `null`
  console.log(name.toUpperCase())
}

main()
