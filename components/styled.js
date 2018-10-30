import styled from 'styled-components'

// É dessa forma como alteramos os atributos de um componente no Styled Components.
export const ScrollNavigator = styled.ScrollView.attrs({
  contentContainerStyle: () => ({
    alignItems: 'center',
    justifyContent: 'center',
  }),
})`
  height: 150;
  background-color: rgb(109, 33, 119);
  width: 100%;
`

export const NavigatorContent = styled.View`
  padding: 20px;
`

export const NavigatorBox = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  height: 100;
  width: 80;
  margin-right: 10;
  border-radius: 3;
  padding: 8px;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: #FFF;
`

export const Icon = styled.Image`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`