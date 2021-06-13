import { Container, Label } from 'semantic-ui-react'

export default (props) => {
  // prevent prop building and read-only error
  let prop = { ...props } /* eslint prefer-const: */
  prop.profile = prop.profile || { basics: {} }
  return (
    <header className="mainHeader">
      <Container>
        <Label>
          {prop.profile.basics.name} / <Label.Detail as='a' href={prop.profile.basics.website} target='_blank' rel='noopener norefer'>{prop.profile.basics.website}</Label.Detail>
        </Label>
      </Container>
    </header>)
}
