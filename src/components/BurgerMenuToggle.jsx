import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function BurgerMenuToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div class="menu">
      <button class="burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button>
      <div class={`menu-items${open ? ' open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
}