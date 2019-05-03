const Draft = () => {
  return (
    <div className="draft">Draft</div>
  )
}


const FormEnhancer = (testOptions) => {
    return function(A) {
      // console.log('asdsadsdsad')
      // A.props = {}
      // A.props.main = 1000000000
      // console.dir(A)
      return class B extends Component {
        render() {
          return <A testOptions={testOptions} {...this.props} />
        }
      }
    }
}

export default FormEnhancer
