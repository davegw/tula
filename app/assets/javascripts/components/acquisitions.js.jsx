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
        <a className='btn btn-success text-right' href='admin/acquisitions/new'>
          Add New Acquisition
        </a>
      </div>
    );
  }
});

var AcquisitionYear = React.createClass({
  render: function() {
    return (<h3 className='text-center'>2013 Acquisitions</h3>);
  }
});

var AcquisitionDetails = React.createClass({
  render: function() {
    return (
      <tr>
        <td className='text-center'>Blah</td>
        <td className='text-center'>Blah</td>
        <td className='text-center'>Blah</td>
        <td className='text-center'>Blah</td>
        <td className='text-center'>Blah</td>
        <td className='text-center'>Blah</td>
        <td className='text-center'>Blah</td>
      </tr>
    );
  }
});

var AcquisitionTable = React.createClass({
  render: function() {
    var acquisitions = [1, 2, 3, 4].map(function() {
      return (
        <AcquisitionDetails />
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
        <AcquisitionYear />
        <AcquisitionTable />
      </div>
    );
  }
});

var AcquisitionContainer = React.createClass({
  render: function() {
    var years = [2013, 2014, 2015].map(function() {
      return (
        <AcquisitionYearContainer />
      );
    });

    return(
      <div>
        <AcquisitionCreateButton />
        {years}
      </div>
    );
  }
});

React.render(<AcquisitionContainer />, document.getElementById('admin_acquisitions_index'));
