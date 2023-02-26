import { NextPage } from 'next'

const HomePage: NextPage = ({ posts }) => {
  // Render your page content here
  return (
    <div>
      {posts && posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default HomePage
