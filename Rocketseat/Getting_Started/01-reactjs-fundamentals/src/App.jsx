import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Luan Oliveira"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo non nam similique quod harum placeat ad, velit in expedita neque ducimus, cupiditate eum? Distinctio error sequi similique aliquid ad mollitia."
      />
      <Post
        author="Estefâne Oliveira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex doloribus cum, tempore, cumque incidunt, reiciendis consectetur ipsam aspernatur quam odit optio harum neque repudiandae blanditiis quas vel laborum corporis."
      />
    </div >
  )
}