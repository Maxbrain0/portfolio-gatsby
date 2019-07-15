const colorFromIndex = index => {
  const colors = ["#002d5b", "#f44800", "#00af37", "#45009e"]
  return colors[index % colors.length]
}

export { colorFromIndex }
