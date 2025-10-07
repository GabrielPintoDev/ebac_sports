import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { useGetProductsQuery } from '../services/productsApi'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const { favoritos } = useSelector((state: RootState) => state.cart)
  const { data: produtos = [], isLoading, error } = useGetProductsQuery()

  if (isLoading) return <p>Carregando produtos...</p>
  if (error) return <p>Erro ao carregar produtos 😢</p>

  const produtoEstaNosFavoritos = (id: number) => {
    return favoritos.some((f) => f.id === id)
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
