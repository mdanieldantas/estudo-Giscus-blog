import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import BlogList from '../components/BlogList';
import Layout from '../components/Layout';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Blog Florescer Humano</h1>
        <BlogList posts={posts} />
      </div>
    </Layout>
  );
};

export default Home;