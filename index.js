function produceDrivingRange(range) {
  return function(bar, baz) {
    const [barInt, bazInt] = [parseInt(bar), parseInt(baz)]
    const distance = Math.abs(barInt - bazInt)
    if (distance > range) {
      return `${distance - range} out of range`
    } else {
      return `within range by ${range - distance}`
    }
  }
}
