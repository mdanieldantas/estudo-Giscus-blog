import { Artigo } from '../types';

const BlogPost = ({ artigo }: { artigo: Artigo }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <img src={['/focalizacao-conectando-se.png','/importancia-da-empatia.png','/mindfulness-autorregulacao.png'][artigo.id % 3]} alt="Capa padrão" className="w-full h-64 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold mb-4">{artigo.titulo}</h1>
      <div className="flex flex-wrap gap-2 mb-2">
        {artigo.autor && (
          <span className="text-sm text-gray-700">Por {artigo.autor.nome}</span>
        )}
        {artigo.categoria && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{artigo.categoria.nome}</span>
        )}
        {artigo.subcategoria && (
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{artigo.subcategoria.nome}</span>
        )}
      </div>
      <div className="text-gray-600 mb-4">{new Date(artigo.data_criacao).toLocaleDateString()}</div>
      {artigo.tags && artigo.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1">
          {artigo.tags.map((tag) => (
            <span key={tag.id} className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded">{tag.nome}</span>
          ))}
        </div>
      )}
      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: artigo.conteudo }} />
      </div>
    </div>
  );
};

export default BlogPost;