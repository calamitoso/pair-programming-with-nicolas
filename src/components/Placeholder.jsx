function Placeholder({ title = 'Placeholder', children }) {
  return (
    <section className="placeholder" aria-label={title}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Placeholder
