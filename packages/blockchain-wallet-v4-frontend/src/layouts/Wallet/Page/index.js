import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: calc(100% - 100px);
  width: 100%;
  overflow-y: auto;
`

class PageContainer extends React.Component {
  componentDidUpdate (prevProps) {
    if (
      prevProps.children.props.computedMatch.url !==
      this.props.children.props.computedMatch.url
    ) {
      ReactDOM.findDOMNode(this).scrollTop = 0
    }
  }

  componentWillUnmount () {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }

  render () {
    return <Wrapper ref='page' children={this.props.children} />
  }
}

export default PageContainer
