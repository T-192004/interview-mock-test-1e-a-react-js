import styled from 'styled-components'

export const IconsButton = styled.button`
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  padding: 8px;
  border: none;
  background-color: transparent;
`

export const TextArea = styled.textarea`
  background-color: #25262c;
  color: #f1f5f9;
  padding: 10px;
  border-radius: 8px;
  border: solid 1px #334155;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};;
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`
