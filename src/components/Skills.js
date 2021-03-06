import React from 'react';
import '../styles/skills.css';
import { connect } from 'react-redux';
import { fetchSkillsById } from '../actions/index';



class Skills extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loading: false,
      data: ''
    };

  }

  loadData() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is my data.');
      }, 3000);
    });
    return promise;
  }

  componentWillMount() {
    this.setState({
     loading: true
   });
    this.loadData()
    .then((data) => {
      this.props.fetchData(`http://api.dataatwork.org/v1/jobs/${this.props.id}/related_skills`);
      this.props.fetchData(`http://api.dataatwork.org/v1/skills/${this.props.id}/related_skills`);

      this.setState({
        data: data,
        loading: false
      });
    });
  }

  render () {
    if (this.state.loading) {
      console.log('This happens 4th - when waiting for data.');
      return <h2>Loading...</h2>;
    }
      return (
          <div>
            <div>
              <div key={this.props.id}>
                  <div className="job-title-skills">{this.props.skills.job_title}</div>
                  {this.props.skills.skills.map((skill) => (
                    <div key={skill.skill_uuid}>
                        <div className="table-contents">
                            <span id="importance">{skill.importance}</span>
                            <span id="skillname">{skill.skill_name}</span>
                            <span>{skill.description}</span>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        )
   }
}
const mapStateToProps = (state) => {
    return {
        skills: state.skills
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchSkillsById(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);