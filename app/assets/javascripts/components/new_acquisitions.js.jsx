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
        <label>Year</label>
        <select type='select' ref='year'>
          {selectorOptions}
        </select>
      </div>
    );
  }
});

var TextFormField = React.createClass({
  render: function() {
    return (
      <div className='form-group'>
        <label for={this.props.inputValue}>{this.props.label}</label>
        <input name={this.props.inputValue} type='text' className='form-control' />
      </div>
    );
  }
});

var NewAcquisitionForm = React.createClass({
  render: function() {
    var textFormFields = [
        {label: 'Company', inputValue: 'company'},
        {label: 'Price at beginning of Year', inputValue: 'initial_price'},
        {label: 'Buy Out Price', inputValue: 'acquisition_price'},
      ].map(function(field, idx) {
        return (
          <TextFormField
            key={idx}
            label={field.label}
            inputValue={field.inputValue}
          />
        );
      });
    return (
      <form>
        <YearSelector />
        {textFormFields}
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
