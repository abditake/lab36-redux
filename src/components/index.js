import { connect } from 'react-redux';

// import { incrementCount } from '../store/votes'
const Candidates = (props) => {
  return (
    <>
      <h1>WIP</h1>
    </>
  )
}


const mapStateToProps = ({ votes }) => {
  return {
    totalVotes: votes.totalVotes,
    candidates: votes.candidates
  }


}



// const mapDispatchToProps = {
//   incrementCount
// }

export default connect(mapStateToProps)(Candidates);