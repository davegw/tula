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
        <a className='btn btn-success' href='/admin/new'>
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

var AcquisitionDetail = React.createClass({
  render: function() {
    return (
      <tr>
        <td className='text-center'>{this.props.year}</td>
        <td className='text-center'>{this.props.company}</td>
        <td className='text-center'>{'$' + (+this.props.initialPrice).toFixed(2)}</td>
        <td className='text-center'>{'$' + (+this.props.acquisitionPrice).toFixed(2)}</td>
        <td className='text-center'>{(this.props.return * 100).toFixed(1) + '%'}</td>
        <td className='text-center'>
          <a className='btn btn-link' onClick={this.props.toggleEdit}>Edit</a>
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

var AcquisitionForm = React.createClass({
  handleEdit: function() {
    var updatedAcquisition = {
      year: React.findDOMNode(this.refs.year).value.trim(),
      company: React.findDOMNode(this.refs.company).value.trim(),
      initial_price: React.findDOMNode(this.refs.initialPrice).value.trim(),
      acquisition_price: React.findDOMNode(this.refs.acquisitionPrice).value.trim()
    };
    this.props.handleEdit(updatedAcquisition);
  },

  render: function() {
    return (
      <tr>
        <form action={'/admin/acquisitions/' + this.props.id + '/edit'}  method='PUT'>
          <td className='text-center'><input type='text' defaultValue={this.props.year} className='form-control text-center' ref='year'/></td>
          <td className='text-center'><input type='text' defaultValue={this.props.company} className='form-control text-center' ref='company'/></td>
          <td className='text-center'><input type='text' defaultValue={this.props.initialPrice} className='form-control text-center' ref='initialPrice'/></td>
          <td className='text-center'><input type='text' defaultValue={this.props.acquisitionPrice} className='form-control text-center' ref='acquisitionPrice'/></td>
          <td className='text-center'><input type='text' defaultValue={this.props.return} className='form-control text-center' disabled/></td>
          <td className='text-center'><a className='btn btn-link' onClick={this.props.toggleEdit}>Cancel</a></td>
          <td className='text-center'>
            <button className='btn btn-primary' type='submit' onClick={this.handleEdit}>
              Update
            </button>
          </td>
        </form>
      </tr>
    );
  }
});

var AcquisitionRow = React.createClass({
  getInitialState: function() {
    return {
      form: false,
      year: this.props.year,
      company: this.props.company,
      initial_price: this.props.initialPrice,
      acquisition_price: this.props.acquisitionPrice,
      return: this.props.return
    };
  },

  toggleEdit: function() {
    this.setState({
      form: !this.state.form
    });
  },

  updateAcquisition: function(updatedAcquisition) {
    $.ajax({
      url: '/admin/acquisitions/' + this.props.id,
      type: 'PUT',
      data: {
        acquisition: updatedAcquisition
      },
      success: function(data) {
        this.setState({
          return: data.return
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
    updatedAcquisition.form = false;
    this.setState(updatedAcquisition);
  },

  render: function() {
    if (this.state.form) {
      return (
        <AcquisitionForm
          key={this.props.id}
          id={this.props.id}
          year={this.state.year}
          company={this.state.company}
          initialPrice={this.state.initial_price}
          acquisitionPrice={this.state.acquisition_price}
          return={this.state.return}
          handleEdit={this.updateAcquisition}
          toggleEdit={this.toggleEdit}
        />
      );
    }
    else {
      return (
        <AcquisitionDetail
          key={this.props.id}
          id={this.props.id}
          year={this.state.year}
          company={this.state.company}
          initialPrice={this.state.initial_price}
          acquisitionPrice={this.state.acquisition_price}
          return={this.state.return}
          handleDelete={this.props.handleDelete}
          toggleEdit={this.toggleEdit}
        />
      );
    }
  }
});

var AcquisitionTable = React.createClass({
  render: function() {
    var acquisitionState = this.props.acquisitions[this.props.year] || [];
    var acquisitions = acquisitionState.map(function(acquisition) {
      return (
        <AcquisitionRow
          key={acquisition.id}
          id={acquisition.id}
          year={acquisition.year}
          company={acquisition.company}
          initialPrice={acquisition.initial_price}
          acquisitionPrice={acquisition.acquisition_price}
          return={acquisition.return}
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

  deleteAcquisition: function(id, year) {
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
          handleDelete={this.deleteAcquisition}
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
