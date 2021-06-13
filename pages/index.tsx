/* eslint-disable max-len */
import { createRef } from 'react'
import { Grid, Container, Header, Message, Image, Label, Responsive, Icon, Tab, Sticky, Ref } from 'semantic-ui-react'
import dynamic from 'next/dynamic'
import MainHeader from '../components/header'
import MainFooter from '../components/footer'
import profileJSON from '../resume.json'

const Template = (props) => {
  const ref = createRef()
  const panes = [
    {
      menuItem: 'Personal Information',
      render: () => {
        const InfoPage = dynamic(() => import('./info'))
        return (
          <Tab.Pane attached style={{ border: 'none' }}>
            <InfoPage {...profileJSON} />
          </Tab.Pane>
        )
      }
    },
    {
      menuItem: 'Projects',
      render: () => {
        const ProjectPage = dynamic(() => import('./projects'))
        return (
          <Tab.Pane attached style={{ border: 'none' }}>
            <ProjectPage {...profileJSON} />
          </Tab.Pane>
        )
      }
    }
  ]

  return (
    <Ref innerRef={ref}>
      <Responsive>
        {/* <Sticky context={ref}>
          <MainHeader {...profileJSON} />
        </Sticky> */}

        <Container>
          <Grid>
            <Grid.Row inverted centered style={{ padding: '3rem' }}>
              <Grid.Column mobile={16} computer={4}>
                {profileJSON.profile.basics.picture ? <Image src={profileJSON.profile.basics.picture} /> : undefined}
              </Grid.Column>
              <Grid.Column mobile={16} computer={10}>
                <p>{profileJSON.profile.basics.summary}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container fluid>
          <Grid>
            <Grid.Row centered inverted className={"black"} style={{ padding: '3rem' }}>
              <p><a href={profileJSON.profile.basics.website}>{profileJSON.profile.basics.website}</a></p>
              <Label color='black'>{profileJSON.profile.basics.label}</Label>
              <Header as='h1'>
                {profileJSON.profile.basics.name}
                <Header.Subheader>
                  <Icon name='map marker alternate' />
                  {profileJSON.profile.basics.location.address} {profileJSON.profile.basics.location.city} {profileJSON.profile.basics.location.region}<br />
                  {profileJSON.profile.basics.email ? <small><Icon name='mail' /> {profileJSON.profile.basics.email}</small> : undefined}
                </Header.Subheader>
              </Header>
              <Message>
                <Message.Header>My  Networks</Message.Header>
                <Message.List>
                  {profileJSON.profile.basics.profiles.map((val, index) => {
                    return (<Message.Item key={index}><b>{val.network}:</b> <a href={val.url} target='_blank' rel='noopener noreferrer'>{val.url}</a></Message.Item>)
                  })}
                </Message.List>
              </Message>
            </Grid.Row>
            <Header as='h3' dividing>
              Skills
            </Header>
            {profileJSON.profile.skills.map((val, index) => {
              return (
                <Label key={index} color='black' style={{ marginBottom: 5 }}>
                  {val.name}
                  <Label.Detail>
                    {val.keywords.map((keyword, indexKeyword) => {
                      return (<span key={indexKeyword}> #{keyword} </span>)
                    })}
                  </Label.Detail>
                </Label>)
            })}

            <Tab menu={{ secondary: true, pointing: true }} style={{ marginTop: 30 }} panes={panes} />
          </Grid>
        </Container>
        <MainFooter {...props} />
      </Responsive>
    </Ref>)
}

export default Template
