const colorFromIndex = index => {
  const colors = ["#0e2d4d", "e84b0d", "1e7a3b", "#641b87"]
  return colors[index % colors.length]
}

export { colorFromIndex }
