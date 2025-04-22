export interface Categoria {
  id: number;
  nome: string;
  slug: string;
  descricao?: string;
}

export interface Subcategoria {
  id: number;
  nome: string;
  slug: string;
  categoria_id: number;
  categoria?: Categoria;
}

export interface Autor {
  id: number;
  nome: string;
  biografia?: string;
  foto_url?: string;
  perfil_academico_url?: string;
}

export interface Tag {
  id: number;
  nome: string;
  slug: string;
}

export interface Artigo {
  id: number;
  titulo: string;
  slug: string;
  conteudo: string;
  data_criacao: string;
  data_atualizacao?: string;
  imagem_capa?: string;
  categoria_id?: number;
  subcategoria_id?: number;
  autor_id?: number;
  categoria?: Categoria;
  subcategoria?: Subcategoria;
  autor?: Autor;
  tags?: Tag[];
}