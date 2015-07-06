/**
 * AcquisitionContainer
 *  CreateButton
 *  AcquisitionYear
 *    AcquisitionTable
 *      AcquisitionDetails
 *      AcquisitionDetails
 *  AcquisitionYear
 *    AcquisitionTable
 *      AcquisitionDetails
 *      AcquisitionDetails
 */

var AcquisitionCreateButton = React.createClass({
  render: function() {
    return (
      <div className='text-center'>
        <a className='btn btn-success' href='/admin/acquisitions/new'>
          Add New Acquisition
        </a>
      </div>
    );
  }
});

var AcquisitionYear = React.createClass({
  render: function() {
    return (<h3 className='text-center'>{this.props.year} Acquisitions</h3>);
  }
});

var AcquisitionDeleteButton = React.createClass({
  clickHandler: function() {
    this.props.handleDelete(this.props.id, this.props.year);
  },

  render: function() {
    return (
      <div className='btn btn-danger' onClick={this.clickHandler}>
        Delete
      </div>
    );
  }
});

var AcquisitionDetails = React.createClass({
  render: function() {
    return (
      <tr>
        <td className='text-center'>{this.props.year}</td>
        <td className='text-center'>{this.props.company}</td>
        <td className='text-center'>{this.props.initialPrice}</td>
        <td className='text-center'>{this.props.acquisitionPrice}</td>
        <td className='text-center'>{this.props.return}</td>
        <td className='text-center'>
          <a href={'/admin/acquisitions/' + this.props.id + '/edit'}>Edit</a>
        </td>
        <td className='text-center'>
          <AcquisitionDeleteButton
            id={this.props.id}
            year={this.props.year}
            handleDelete={this.props.handleDelete}
          />
        </td>
      </tr>
    );
  }
});

var AcquisitionTable = React.createClass({
  render: function() {
    var acquisitionState = this.props.acquisitions[this.props.year] || [];
    var acquisitions = acquisitionState.map(function(acquisition) {
      return (
        <AcquisitionDetails
          key={acquisition.id}
          id={acquisition.id}
          year={acquisition.year}
          company={acquisition.company}
          initialPrice={'$' + (+acquisition.initial_price).toFixed(2)}
          acquisitionPrice={'$' + (+acquisition.acquisition_price).toFixed(2)}
          return={(acquisition.return * 100).toFixed(1) + '%'}
          handleDelete={this.props.handleDelete}
        />
      );
    }.bind(this));

    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th className='text-center'>Acquisition Year</th>
            <th className='text-center'>Company</th>
            <th className='text-center'>Price at 1/1/00</th>
            <th className='text-center'>Buy Out Price</th>
            <th className='text-center'>Return</th>
            <th className='text-center'></th>
            <th className='text-center'></th>
          </tr>
        </thead>
        <tbody>
          {acquisitions}
        </tbody>
      </table>
    );
  }
});

var AcquisitionYearContainer = React.createClass({
  render: function() {
    return (
      <div>
        <AcquisitionYear year={this.props.year}/>
        <AcquisitionTable
          year={this.props.year}
          acquisitions={this.props.acquisitions}
          handleDelete={this.props.handleDelete}
        />
      </div>
    );
  }
});

var years = [];
var AcquisitionContainer = React.createClass({
  getInitialState: function() {
    return {
      acquisitions: {}
    };
  },

  componentDidMount: function() {
    this.getAcquisitionData();
  },

  getAcquisitionData: function() {
    $.ajax({
      url: '/admin/acquisitions',
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        years = data.years;
        this.setState({
          acquisitions: data.acquisitions
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  },

  handleDelete: function(id, year) {
    this.state.acquisitions[year] = this.state.acquisitions[year].filter(function(acquisition) {
      return acquisition.id !== id;
    });
    this.setState({
      acquisitions: this.state.acquisitions
    });

    $.ajax({
      url: '/admin/acquisitions/' + id,
      dataType: 'json',
      type: 'DELETE',
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  },

  render: function() {
    var yearComponents = years.map(function(year, idx) {
      return (
        <AcquisitionYearContainer
          key={idx}
          year={year}
          acquisitions={this.state.acquisitions}
          handleDelete={this.handleDelete}
        />
      );
    }.bind(this));
    return(
      <div>
        <AcquisitionCreateButton />
        {yearComponents}
      </div>
    );
  }
});

React.render(<AcquisitionContainer />, document.getElementById('admin-acquisitions-index-container'));
