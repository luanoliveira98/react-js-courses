import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/luanoliveira98.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luan Oliveira</strong>
              <time title="May 7th at 10:14am" dateTime="2025-05-07 10:14:28">About 1h ago</time>
            </div>

            <button title='Delete comment'>
              <Trash size={20} />
            </button>
          </header>

          <p>Very good Devon, congratulations!! 👏👏</p>
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