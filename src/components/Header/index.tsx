import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionGlobal: () => void;
}

export function Header({ onOpenNewTransactionGlobal }: HeaderProps) {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button"
          onClick={onOpenNewTransactionGlobal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}