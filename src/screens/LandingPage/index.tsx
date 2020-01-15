// import PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  // Sidebar,
  Visibility,
} from '../../components'

export const HomepageHeading: React.FC = () => (
  <Container text={true}>
    <Header
      as="h1"
      content="Your new Kanban Board"
      inverted={true}
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as="h2"
      content="Be more productive."
      inverted={true}
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <Button as={Link} to="/app" primary={true} size="huge">
      Get Started
      <Icon name="arrow right" />
    </Button>
  </Container>
)

class DesktopContainer extends React.Component<any, any> {
  state = { fixed: false }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted={true}
            textAlign="center"
            style={{
              minHeight: 700,
              padding: '1em 0em',
              backgroundColor: '#0079bf',
            }}
            vertical={true}
          >
            <Menu
              fixed={fixed ? 'top' : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active={true}>
                  Home
                </Menu.Item>
                {/* <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item> */}
                <Menu.Item position="right">
                  <Button as={Link} to="/login" inverted={!fixed}>
                    Log in
                  </Button>
                  <Button
                    as={Link}
                    to="/signup"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

export default DesktopContainer
