import React, {Component} from "react";
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";


// function CreateClaim() {
//   return (
//     <div>
//       <h1>Create Claim</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
//         varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
//         Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
//         imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
//         ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
//         elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
//         consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
//         malesuada fames ac ante ipsum primis in faucibus.
//       </p>
//     </div>
//   );
// }

export default class CreateClaim extends Component {
  constructor(props) {
    super(props)
    this.onChangeCategory = this.onChangeCategory.bind(this)

    this.state = {
        title: '',
        date: new Date (),
        category: '',
        clienttocharge: '',
        amount: '',
        notes: '',
        claims: []

    }
  }

  componentDidMount() {
    this.setState({
      category: ['food']
    })
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();

    const expense = {
      category: this.state.category
    }
    console.log(expense)

    //connecting front end to the backend
    window.location = '/';
  }
  render(){
    return (
      <div>
        <h3>Create New Expense</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Category: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.category}
                onChange={this.onChangecategory}
                />
                 
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
};