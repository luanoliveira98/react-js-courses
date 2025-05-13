import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/luanoliveira98.png" />
          <div className={styles.authorInfo}>
            <strong>Luan Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="May 7th at 10:14am" dateTime="2025-05-07 10:14:28">Posted 1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Hey guys👋</p>
        <p>I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. The name of the project is DoctorCare🚀</p>
        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#newproject</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a feedback</strong>

        <textarea
          placeholder='Leave a comment'>
        </textarea>

        <footer>
          <button type='submit'>Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}