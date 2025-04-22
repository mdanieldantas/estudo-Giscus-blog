import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import { Artigo } from '../../types';

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [artigo, setArtigo] = useState<Artigo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtigo = async () => {
      if (!slug) return;
      const { data, error } = await supabase
        .from('artigos')
        .select(`
          *,
          categoria:categoria_id (id, nome, slug),
          subcategoria:subcategoria_id (id, nome, slug, categoria_id),
          autor:autor_id (id, nome, foto_url),
          artigos_tags (tag_id, tags:tag_id (id, nome, slug))
        `)
        .eq('slug', slug)
        .single();
      if (!error && data) {
        setArtigo({
          ...data,
          tags: data.artigos_tags?.map((at: any) => at.tags) || [],
        });
      }
      setLoading(false);
    };
    fetchArtigo();
  }, [slug]);

  if (loading) return <div>Carregando...</div>;
  if (!artigo) return <div>Artigo não encontrado</div>;

  return (
    <Layout>
      <BlogPost artigo={artigo} />
    </Layout>
  );
};

export default BlogPostPage;