export default function Blog({ posts }) {
  if (!posts) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📰 Static Blog Posts</h1>
      <ul style={styles.list}>
        {posts.map((post) => (
          <li key={post.id} style={styles.listItem}>
            <strong>#{post.id}</strong> – {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#fff",
    marginBottom: "12px",
    padding: "12px",
    borderRadius: "5px",
    borderLeft: "5px solid #0070f3",
  },
};
