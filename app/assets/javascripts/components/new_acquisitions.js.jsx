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
    var selectorOptions = this.props.yearOptions.map(function(year, idx) {
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
  handleSubmit: function(e) {
    e.preventDefault();
    var newAcquistion = {
      year: this.props.year,
      company: React.findDOMNode(this.refs.company).value.trim(),
      initial_price: React.findDOMNode(this.refs.initial_price).value.trim(),
      acquisition_price: React.findDOMNode(this.refs.acquisition_price).value.trim(),
    };
    console.log(newAcquistion);
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
        <YearSelector
          defaultYear={this.props.year}
          changeHandler={this.props.yearSelection}
          yearOptions={this.props.yearOptions}
        />
        {textFormFields}
        <input type='submit' className='btn btn-success' value='Add New Acquisition' />
      </form>
    );
  }
});

var NewAcquisition = React.createClass({
  getInitialState: function() {
    return {
      yearOptions: [],
      year: ''
    };
  },

  yearSelection: function(e) {
    this.setState({
      year: e.target.value
    });
  },

  componentDidMount: function() {
    this.getAcquisitionData();
  },

  getAcquisitionData: function() {
    $.ajax({
      url: '/admin/acquisitions/new',
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        this.setState({
          yearOptions: data.year_options,
          year: data.year_options[0]
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  },

  render: function() {
    return (
      <div>
        <h1>Create New Acquisition</h1>
        <NewAcquisitionForm
          yearOptions={this.state.yearOptions}
          yearSelection={this.yearSelection}
          year={this.state.year}
        />
      </div>
    );
  }
});

React.render(<NewAcquisition />, document.getElementById('admin-acquisitions-new-container'));
