import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/luanoliveira98.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luan Oliveira</strong>
              <time title="May 7th at 10:14am" dateTime="2025-05-07 10:14:28">About 1h ago</time>
            </div>

            <button title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Clap <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}