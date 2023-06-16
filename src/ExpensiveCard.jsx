export function ExpensiveFollowCard ({ text, quantity }) {
  return (
    <div>
      <article className='container'>
        <strong>{text}</strong>
      </article>
      <article>
        <div>
          <input type='number' placeholder='Total' />
        </div>
        <div>
          <strong>{quantity}</strong>
        </div>
      </article>
    </div>
  )
}
