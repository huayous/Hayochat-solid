import { on, onMount } from 'solid-js'

export default function App() {
  onMount(async () => {
    const res = await fetch('http://localhost:2026/api/rooms')
    const data = await res.json()
    console.log('rooms:', data)
  })

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}
