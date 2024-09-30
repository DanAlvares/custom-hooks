import React from 'react';
import useFetch from './useFetch';

interface Post {
  id: number;
  title: string;
}

const UseFetchDemo: React.FC = () => {
  const { data, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul>
        {data?.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseFetchDemo;
