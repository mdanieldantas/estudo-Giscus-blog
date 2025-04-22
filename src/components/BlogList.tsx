import { supabase } from '../lib/supabaseClient';
import { Artigo } from '../types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const BlogList = () => {
  const [artigos, setArtigos] = useState<Artigo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtigos = async () => {
      const { data, error } = await supabase
        .from('artigos')
        .select(`
          id, titulo, slug, conteudo, data_criacao, imagem_capa,
          categoria:categoria_id (id, nome, slug),
          subcategoria:subcategoria_id (id, nome, slug, categoria_id),
          autor:autor_id (id, nome, foto_url),
          artigos_tags (tag_id, tags:tag_id (id, nome, slug))
        `)
        .order('data_criacao', { ascending: false });
      if (!error && data) {
        // Normaliza tags para um array direto
        const artigosComTags = data.map((artigo: any) => ({
          ...artigo,
          tags: artigo.artigos_tags?.map((at: any) => at.tags) || [],
        }));
        setArtigos(artigosComTags);
      }
      setLoading(false);
    };
    fetchArtigos();
  }, []);

  if (loading) return <div className="text-center py-10">Carregando...</div>;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {artigos.map((artigo) => (
        <Link key={artigo.id} href={`/blog/${artigo.slug}`} className="block rounded-lg border bg-white hover:shadow-lg transition overflow-hidden">
          {artigo.imagem_capa ? (
            <img src={artigo.imagem_capa} alt={artigo.titulo} className="w-full h-48 object-cover" />
          ) : (
            <img src={['/focalizacao-conectando-se.png','/importancia-da-empatia.png','/mindfulness-autorregulacao.png'][artigo.id % 3]} alt="Capa padrão" className="w-full h-48 object-cover" />
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{artigo.titulo}</h2>
            <p className="text-gray-500 text-sm mb-2">{new Date(artigo.data_criacao).toLocaleDateString()}</p>
            {artigo.autor && (
              <p className="text-sm text-gray-700 mb-1">Por {artigo.autor.nome}</p>
            )}
            {artigo.categoria && (
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">{artigo.categoria.nome}</span>
            )}
            {artigo.subcategoria && (
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">{artigo.subcategoria.nome}</span>
            )}
            {artigo.tags && artigo.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {artigo.tags.map((tag) => (
                  <span key={tag.id} className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded">{tag.nome}</span>
                ))}
              </div>
            )}
            <p className="text-gray-700 line-clamp-2 mt-2">{artigo.conteudo.slice(0, 120)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;