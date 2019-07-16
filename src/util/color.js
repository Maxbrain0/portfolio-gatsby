const colorFromIndex = index => {
  const colors = ["rgba(0, 0, 0, 0.733)", "#f44800", "#00af37", "#45009e"]
  return colors[index % colors.length]
}

export { colorFromIndex }
