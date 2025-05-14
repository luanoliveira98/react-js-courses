import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luanoliveira98.png',
      name: 'Luan Oliveira',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: "Hey guys👋" },
      { type: 'paragraph', content: "I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. The name of the project is DoctorCare🚀" },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-05-13 11:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CEO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: "Hey guys👋" },
      { type: 'paragraph', content: "I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. The name of the project is DoctorCare🚀" },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-05-14 10:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div >
  )
}