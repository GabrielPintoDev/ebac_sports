import { useSelector } from 'react-redux'
import * as S from './styles'
import { paraReal } from '../Produto'
import cesta from '../../assets/cesta.png'
import { RootState } from '../../store'

const Header = () => {
  const { itens: itensNoCarrinho, favoritos } = useSelector(
    (state: RootState) => state.cart
  )

  const valorTotal = itensNoCarrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
