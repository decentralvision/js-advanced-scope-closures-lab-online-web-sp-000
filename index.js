function produceDrivingRange(range) {
  return function(bar, baz) {
    const [barInt, bazInt] = [parseInt(bar), parseInt(baz)]
    Math.abs(barInt - bazInt)
  }
}
