import { useRouter } from "next/router";
import produtos from "../../utils/produtos";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DetalheProduto() {
  const router = useRouter();
  const { id } = router.query;
  const produto = produtos.find(p => String(p.id) === id);

  if (!produto) return <div>Carregando...</div>;

  return (
    <>
      <Header />
      <main style={{ maxWidth: 900, margin: "2rem auto", display: "flex", gap: 40 }}>
        <img src={produto.imagem} alt={produto.nome} style={{ width: 340, borderRadius: 18 }} />
        <div>
          <h1 style={{ color: "#b89f6c", fontSize: 32 }}>{produto.nome}</h1>
          <p style={{ fontSize: 22, color: "#665", margin: "1rem 0" }}>R$ {produto.preco.toFixed(2)}</p>
          <p style={{ marginBottom: 18 }}>{produto.descricao || "Produto de altíssimo padrão, conforto e elegância."}</p>
          <button
            style={{
              background: "#b89f6c", color: "#fff", padding: "12px 40px", border: "none",
              borderRadius: 8, fontSize: 18, cursor: "pointer"
            }}
            onClick={() => {
              let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
              carrinho.push(produto);
              localStorage.setItem("carrinho", JSON.stringify(carrinho));
              alert("Produto adicionado ao carrinho!");
            }}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}