// Title
// Form
//  Year Selector
//  Input
//  Input
//  Input
//  Submit

var SelectorOption = React.createClass({
  render: function() {
    return <option value={this.props.optionValue}>{this.props.optionValue}</option>;
  }
});

var YearSelector = React.createClass({
  render: function() {
    var selectorOptions = [1, 2, 3].map(function(year, idx) {
      return <SelectorOption key={idx} optionValue={year} />;
    });
    return (
      <div className='form-group'>
        <label htmlFor='year'>Year</label>
        <select name='year' type='select' className='form-control' onChange={this.props.changeHandler} value={this.props.defaultYear}>
          {selectorOptions}
        </select>
      </div>
    );
  }
});

var NewAcquisitionForm = React.createClass({
  getInitialState: function() {
    return {
      year: '2'
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newAcquistion = {
      year: this.state.year,
      company: React.findDOMNode(this.refs.company).value.trim(),
      initial_price: React.findDOMNode(this.refs.initial_price).value.trim(),
      acquisition_price: React.findDOMNode(this.refs.acquisition_price).value.trim(),
    };
    console.log(newAcquistion);
  },

  yearSelection: function(e) {
    this.setState({
      year: e.target.value
    });
  },

  render: function() {
    var textFormFields = [
      {label: 'Company', inputValue: 'company'},
      {label: 'Price at Beginning of Year', inputValue: 'initial_price'},
      {label: 'Buy Out Price', inputValue: 'acquisition_price'},
    ].map(function(field, idx) {
      return (
        <div key={idx} className='form-group'>
          <label htmlFor={field.inputValue}>{field.label}</label>
          <input
            name={field.inputValue}
            type='text'
            className='form-control'
            ref={field.inputValue}
          />
        </div>
      );
    });
    return (
      <form onSubmit={this.handleSubmit}>
        <YearSelector defaultYear={this.state.year} changeHandler={this.yearSelection} />
        {textFormFields}
        <input type='submit' className='btn btn-success' value='Add New Acquisition' />
      </form>
    );
  }
});

var NewAcquisition = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Create New Acquisition</h1>
        <NewAcquisitionForm />
      </div>
    );
  }
});

React.render(<NewAcquisition />, document.getElementById('admin-acquisitions-new-container'));
