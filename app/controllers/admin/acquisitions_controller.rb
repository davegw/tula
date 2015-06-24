class Admin::AcquisitionsController < ApplicationController
  layout 'admin'

  def index
    @acquisitions = Acquisition.all.group_by(&:year)
    @years = @acquisitions.keys.sort.reverse
  end

  def edit
    @select_options = (2013..2015).map { |year| [year.to_s, year] }
    @acquisition = Acquisition.find params[:id]
  end

  def update
    acquisition = Acquisition.find(params[:id])
    data = params[:acquisition]
    data[:return] = return_calculator(data[:acquisition_price], data[:initial_price])
    acquisition.update_attributes(data)

    redirect_to :action => :index
  end

  def destroy
    Acquisition.find(params[:id]).destroy

    redirect_to :action => :index
  end

  def create
    data = params
    data[:year] = params[:acquisition_date].year
    data[:return] = return_calculator(params[:acquisition_price], params[:initial_price])
    @acquisition = Acquisition.create(data)

    redirect_to :action => :index
  end

  def return_calculator(initial, final)
    (final.to_f - initial.to_f) / initial.to_f
  end
end
