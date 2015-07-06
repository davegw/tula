/**
 * AcquisitionContainer
 *  CreateButton
 *    AcquisitionYear
 *      AcquisitionTable
 *        AcquisitionDetails
 *        AcquisitionDetails
 *    AcquisitionYear
 *      AcquisitionTable
 *        AcquisitionDetails
 *        AcquisitionDetails
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
  render: function() {
    return (
      <a className='btn btn-danger' href='#'>
        Delete
      </a>
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
          initialPrice={acquisition.price}
          acquisitionPrice={acquisition.buyout}
          return={acquisition.return}
        />
      );
    });

    return (
      <table className='table table-striped'>
        <tr>
          <th className='text-center'>Acquisition Year</th>
          <th className='text-center'>Company</th>
          <th className='text-center'>Price at 1/1/00</th>
          <th className='text-center'>Buy Out Price</th>
          <th className='text-center'>Return</th>
          <th className='text-center'></th>
          <th className='text-center'></th>
        </tr>
        {acquisitions}
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

  render: function() {
    var yearComponents = years.map(function(year, idx) {
      return (
        <AcquisitionYearContainer
          key={idx}
          year={year}
          acquisitions={this.state.acquisitions}
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
